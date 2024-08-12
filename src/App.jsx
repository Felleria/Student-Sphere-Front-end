/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar';

import ManageStudents from './components/admin/ManageStudents';
import ManageTeachers from './components/admin/ManageTeachers';
import ManageClasses from './components/admin/ManageClasses';
import Reports from './components/admin/Reports';

import ManageGrades from './components/teacher/ManageGrades';
import ManageAttendance from './components/teacher/ManageAttendance';
import ManageCourses from './components/teacher/ManageCourses';

import Profile from './components/student/Profile';
import Progress from './components/student/Progress';
import Attendance from './components/student/Attendance';
import Grades from './components/student/Grades';
import AssignedTeachers from './components/student/AssignedTeachers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin/*" element={<AdminDashboard />}>
          <Route path="manage-students" element={<ManageStudents />} />
          <Route path="manage-teachers" element={<ManageTeachers />} />
          <Route path="manage-classes" element={<ManageClasses />} />
          <Route path="assigned-teachers" element={<AssignedTeachers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="teacher/*" element={<TeacherDashboard />}>
          <Route path="manage-grades" element={<ManageGrades />} />
          <Route path="manage-attendance" element={<ManageAttendance />} />
          <Route path="manage-courses" element={<ManageCourses />} />
        </Route>
        <Route path="student/*" element={<StudentDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="progress" element={<Progress />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="grades" element={<Grades />} />
          <Route path="assigned-teachers" element={<AssignedTeachers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; */

/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

import ManageStudents from './components/admin/ManageStudents';
import ManageTeachers from './components/admin/ManageTeachers';
import ManageClasses from './components/admin/ManageClasses';
import Reports from './components/admin/Reports';

import ManageGrades from './components/teacher/ManageGrades';
import ManageAttendance from './components/teacher/ManageAttendance';
import ManageCourses from './components/teacher/ManageCourses';

import Profile from './components/student/Profile';
import Progress from './components/student/Progress';
import Attendance from './components/student/Attendance';
import Grades from './components/student/Grades';
import AssignedTeachers from './components/student/AssignedTeachers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="admin/*" element={<AdminDashboard />}>
          <Route path="manage-students" element={<ManageStudents />} />
          <Route path="manage-teachers" element={<ManageTeachers />} />
          <Route path="manage-classes" element={<ManageClasses />} />
          <Route path="assigned-teachers" element={<AssignedTeachers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="teacher/*" element={<TeacherDashboard />}>
          <Route path="manage-grades" element={<ManageGrades />} />
          <Route path="manage-attendance" element={<ManageAttendance />} />
          <Route path="manage-courses" element={<ManageCourses />} />
        </Route>
        <Route path="student/*" element={<StudentDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="progress" element={<Progress />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="grades" element={<Grades />} />
          <Route path="assigned-teachers" element={<AssignedTeachers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;*/


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // For handling different user roles

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} userRole={userRole} logout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage login={login} />} />

        {/* Protected Routes */}   
        {isAuthenticated ? (
          <>
            <Route path="admin/*" element={<AdminDashboard />} />
            <Route path="teacher/*" element={<TeacherDashboard />} />
            <Route path="student/*" element={<StudentDashboard />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App; 