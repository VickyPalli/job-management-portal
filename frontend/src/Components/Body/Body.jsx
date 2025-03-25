import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make HTTP requests
import { Card } from "./Card/Card"; // Import your Card component

export const Body = ({ showPopup }) => {
  const [jobs, setJobs] = useState([]); // State to store job postings
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetch job postings from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs"); // Your backend API URL
        setJobs(response.data); // Set the fetched jobs in state
      } catch (error) {
        console.error("Error fetching job postings:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchJobs(); // Call the fetch function when the component mounts
  }, [showPopup]); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2%]">
      {/* Render job postings dynamically */}

      {jobs.map((job, index) => (
        <Card
          key={index}
          title={job.title}
          companyName={job.companyname}
          location={job.location}
          salary={job.salary}
          applicationLastDate={job.application_lastdate}
          jobtype={job.type}
          description={job.description}
          createdAt={job.createdAt}
        />
      ))}
    </div>
  );
};
