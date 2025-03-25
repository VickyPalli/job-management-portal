import React, { useState } from "react";
import axios from "axios";

export const Popup = ({ setShowPopup }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    title: "",
    companyname: "",
    location: "",
    type: "FullTime",
    salaryMin: "",
    salaryMax: "",
    application_lastdate: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use axios to send the POST request
      const response = await axios.post(
        "http://localhost:5000/api/jobs", // Your backend API URL
        {
          title: formData.title,
          companyname: formData.companyname,
          location: formData.location,
          type: formData.type,
          salary: `${formData.salaryMin} to ${formData.salaryMax}`,
          application_lastdate: formData.application_lastdate,
          description: formData.description,
        },
        {
          headers: {
            "Content-Type": "application/json", // Set Content-Type header
          },
        }
      );
      alert(response.data.message);
      setShowPopup(false);
    } catch (error) {
      // If an error occurs during the request
      console.error("Error posting job:", error);
      alert("Failed to post job");
    }
  };

  return (
    <div
      onClick={() => setShowPopup(false)}
      className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[80%] bg-white z-20 rounded-lg shadow-lg p-6 flex flex-col relative md:w-[50%] sm:h-[70%] sm:w-[85%]"
      >
        <h2 className="text-2xl text-center w-full font-semibold text-gray-800 mb-6">
          Create Job Opening
        </h2>

        <div className="flex-1 overflow-y-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Full Stack Developer"
                  className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  placeholder="Amazon, Microsoft, Swiggy"
                  className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 outline-none rounded-lg appearance-none"
                >
                  <option>Choose Preferred Location</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 outline-none rounded-lg appearance-none"
                >
                  <option>FullTime</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Range (LPA)
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleChange}
                    placeholder="₹ 0"
                    className="w-1/2 p-3 border outline-none border-gray-300 rounded-lg"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="text"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleChange}
                    placeholder="₹ 12,00,000"
                    className="w-1/2 p-3 border outline-none border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="application_lastdate"
                  value={formData.application_lastdate}
                  onChange={handleChange}
                  className="w-full p-3 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please share a description to let the candidate know more about the job role"
                className="w-full p-3 border border-gray-300 outline-none rounded-lg h-48 resize-none"
              />
            </div>

            <div className="mt-6 flex justify-between space-x-4">
              <button
                type="button"
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                onClick={() => setShowPopup(false)}
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition flex items-center"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
