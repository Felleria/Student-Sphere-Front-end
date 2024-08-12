import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'; 

const ManageGrades = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('/api/teacher/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
    fetch(`/api/teacher/courses/${courseId}/students`)
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        const initialGrades = data.reduce((acc, student) => {
          acc[student.id] = student.grade || '';
          return acc;
        }, {});
        formik.setValues({ grades: initialGrades });
      });
  };

  const formik = useFormik({
    initialValues: {
      grades: {},
    },
    onSubmit: (values) => {
      Object.entries(values.grades).forEach(([studentId, grade]) => {
        fetch(`/api/teacher/students/${studentId}/grades`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ grade }),
        });
      });
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Grades</h1>
      <div className="mb-4">
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleCourseSelect(e.target.value)}
        >
          <option value="">Select a Course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCourse && (
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Student ID</th>
                <th className="py-2 px-4 border-b">Student Name</th>
                <th className="py-2 px-4 border-b">Grade</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-t">
                  <td className="py-2 px-4 border-r">{student.id}</td>
                  <td className="py-2 px-4 border-r">{student.name}</td>
                  <td className="py-2 px-4 border-r">
                    <input
                      type="text"
                      name={`grades.${student.id}`}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formik.values.grades[student.id] || ''}
                      onChange={formik.handleChange}
                    />
                  </td>
                  <td className="py-2 px-4">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default ManageGrades;
