import React, { useState, useEffect } from 'react';

const EnrollmentTable = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await fetch('http://api.example.com/enrollments'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEnrollments(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching enrollments:', error);
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Enrollment List</h1>
      {error && <p className="text-red-500 text-center mb-4">Error: {error.message}</p>}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Student</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.length > 0 ? (
            enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td className="border border-gray-300 px-4 py-2">{enrollment.id}</td>
                <td className="border border-gray-300 px-4 py-2">{enrollment.student}</td>
                <td className="border border-gray-300 px-4 py-2">{enrollment.course}</td>
                <td className="border border-gray-300 px-4 py-2">{enrollment.class}</td>
              </tr>
            ))
          ) : (
            !error && (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">No enrollments found</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentTable;
