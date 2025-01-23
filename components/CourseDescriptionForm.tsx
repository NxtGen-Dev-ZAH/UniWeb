import { useState } from 'react';

const CourseDescriptionForm = () => {
  const [courseName, setCourseName] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (response.ok) {
          console.log('File uploaded successfully:', data.file);
          alert('File uploaded successfully!');
        } else {
          console.error('File upload error:', data.error);
          alert(`File upload failed: ${data.error}`);
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred during file upload.');
      }
    }
  };

  const generateTemplate = async (type: 'theory' | 'practical') => {
    try {
      const response = await fetch('/api/generate-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, courseName, teacherName }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`${type} template generated successfully`);
        alert(`Template generated successfully! Download here: ${data.filePath}`);
        window.location.href = data.filePath; // Trigger download
      } else {
        console.error('Template generation error:', data.error);
        alert(`Template generation failed: ${data.error}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred during template generation.');
    }
  };

  const resetForm = () => {
    setCourseName('');
    setTeacherName('');
    alert('Form reset successfully!');
  };

  const validateInputs = () => {
    if (!courseName || !teacherName) {
      alert('Please fill in both Course Name and Teacher Name.');
      return false;
    }
    return true;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Course Description Form</h2>

      <label className="block mb-2">
        Course Name:
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Teacher Name:
        <input
          type="text"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Upload Outline (Word/PDF):
        <input
          type="file"
          onChange={handleFileUpload}
          className="block w-full p-2 border border-gray-300 rounded mt-1"
        />
      </label>

      <div className="flex space-x-4">
        <button
          onClick={() => validateInputs() && generateTemplate('theory')}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary"
        >
          Generate Theory Template
        </button>
        <button
          onClick={() => validateInputs() && generateTemplate('practical')}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary"
        >
          Generate Practical Template
        </button>
        <button
          onClick={resetForm}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Reset Form
        </button>
      </div>
    </div>
  );
};

export default CourseDescriptionForm;
