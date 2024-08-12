import React, { useState, useEffect } from 'react';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/teacher/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Courses Assigned</h1>
      {courses.map(course => (
        <div key={course.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
          <p className="mb-4 text-gray-700">Schedule: {course.schedule}</p>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Student ID</th>
                <th className="py-2 px-4 border-b">Student Name</th>
              </tr>
            </thead>
            <tbody>
              {course.students.map(student => (
                <tr key={student.id} className="border-t">
                  <td className="py-2 px-4 border-r">{student.id}</td>
                  <td className="py-2 px-4">{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ManageCourses;
