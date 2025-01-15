"use client";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [teacherName, setTeacherName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Teacher Name:", teacherName);
    console.log("Course Name:", courseName);
    console.log("Course Code:", courseCode);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Arid Agriculture University Portal
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="mb-4">
            <label
              htmlFor="teacherName"
              className="block text-gray-700 font-medium mb-2"
            >
              Teacher Name:
            </label>
            <input
              type="text"
              id="teacherName"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="courseName"
              className="block text-gray-700 font-medium mb-2"
            >
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="courseCode"
              className="block text-gray-700 font-medium mb-2"
            >
              Course Code:
            </label>
            <input
              type="text"
              id="courseCode"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        <Sidebar />
      </div>
    </>
  );
}
