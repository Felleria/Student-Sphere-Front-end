import React, { useState, useEffect } from 'react';

const TeacherProfile = ({ teacherId }) => {
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(`http://api.example.com/teacher/${teacherId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeacher(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching teacher:', error);
      }
    };

    fetchTeacher();
  }, [teacherId]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Teacher Profile</h1>
      {error && <p className="text-red-500 text-center mb-4">Error: {error.message}</p>}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Attribute</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {teacher ? (
            <>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ID</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Name</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
              </tr>
            </>
          ) : (
            !error && (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center">Loading...</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherProfile;