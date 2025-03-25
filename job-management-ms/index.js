const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // Import CORS package

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://app:Ngc4qziUWTNbjy81@app.fmxq6.mongodb.net/jobposting",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Multer storage configuration (store file in memory)
const storage = multer.memoryStorage(); // Store file in memory

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit for image uploads
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(new Error("Only image files are allowed"), false);
    }
    cb(null, true);
  },
});

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    companyname: { type: String, required: true },
    location: { type: String, required: true },
    application_lastdate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.model("jobs", jobSchema, "jobs");

app.get("/", (req, res) => {
  res.send("Job Management Ms Running");
});

// API 1: Get all job postings
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch job postings", error: err });
  }
});

// API 2: Post a job with image stored as Base64
app.post("/api/jobs", async (req, res) => {
  const {
    title,
    type,
    salary,
    description,
    companyname,
    location,
    application_lastdate,
  } = req.body;

  // Check if all required fields are provided
  if (
    !title ||
    !type ||
    !salary ||
    !description ||
    !companyname ||
    !location ||
    !application_lastdate
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new job posting
    const newJob = new Job({
      title,
      type,
      salary,
      description,
      companyname,
      location,
      application_lastdate,
    });

    // Save the job posting
    await newJob.save();

    // Send the created job posting in the response
    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (err) {
    console.log("Vicky---------", err);
    res.status(500).json({ message: "Failed to post job", error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
