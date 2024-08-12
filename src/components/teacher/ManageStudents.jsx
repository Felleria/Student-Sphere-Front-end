import React, { useState, useEffect } from 'react';

function TStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/teacher/students')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Students Details</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Stud ID</th>
            <th className="px-4 py-2">Stud Name</th>
            <th className="px-4 py-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="px-4 py-2">{student.id}</td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TStudents;
