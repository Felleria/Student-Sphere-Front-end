/*
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const studentLinks = [
  { name: 'Profile', path: 'profile' },
  { name: 'Progress', path: 'progress' },
  { name: 'Attendance', path: 'attendance' },
  { name: 'Grades', path: 'grades' },
  { name: 'Assigned Teachers', path: 'assigned-teachers' },
];

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar links={studentLinks} />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
*/
import { Link, Routes, Route } from 'react-router-dom';
import Profile from '../components/student/Profile';
import Grades from '../components/student/Grades';
import Attendance from '../components/student/Attendance';
import Progress from '../components/student/Progress';
import AssignedTeachers from '../components/student/AssignedTeachers';

const StudentDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-purple-700 text-white h-screen p-4">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="profile" className="hover:text-gray-300">Profile</Link>
            </li>
            <li>
              <Link to="grades" className="hover:text-gray-300">Grades</Link>
            </li>
            <li>
              <Link to="attendance" className="hover:text-gray-300">Attendance</Link>
            </li>
            <li>
              <Link to="progress" className="hover:text-gray-300">Progress</Link>
            </li>
            <li>
              <Link to="assigned-teachers" className="hover:text-gray-300">Assigned Teachers</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="grades" element={<Grades />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="progress" element={<Progress />} />
          <Route path="assigned-teachers" element={<AssignedTeachers />} />
        </Routes>
      </main>
    </div>
  );
};

export default StudentDashboard;