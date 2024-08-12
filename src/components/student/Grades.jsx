import React, { useState, useEffect } from 'react';

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/grades')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGrades(data);
      })
      .catch(error => {
        setError(error);
        console.error('Error fetching grades:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Grades</h1>
      {error && (
        <p className="text-red-500 font-medium">Error: {error.message}</p>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 text-left">Course</th>
              <th className="py-2 px-4 text-left">Class</th>
              <th className="py-2 px-4 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{grade.courseName}</td>
                <td className="py-2 px-4">{grade.className}</td>
                <td className="py-2 px-4">{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;