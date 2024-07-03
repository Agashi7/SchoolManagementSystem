import {  HashRouter,   Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignin";
import StudentSignIn from "./components/StudentSignin";
import TeacherSignIn from "./components/TeacherSignin";



import AdminDashboard from "./pages/Admin/Dashboard";
import StudentDashboard from './pages/Students/Dashboard';
import TeacherDashboard from './pages/Teachers/Dashboard';


import Announcement from "./pages/Admin/Announcement";
import Assignment from "./pages/Admin/Assignment";
import Attendance from "./pages/Admin/Attendance";
import Classes from "./pages/Admin/Classes";
import EventCalender from "./pages/Admin/EventCalender";
import Exam from "./pages/Admin/Exam";
import Library from "./pages/Admin/Library";
import Performance from "./pages/Admin/Performance";
import SettingsProfile from "./pages/Admin/SettingsProfile";
import Sidebar from "./pages/Admin/Sidebar";
import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";


import AssignmentsSection from './pages/Students/Assignments';
import ExamSection from './pages/Students/Exams';
import PerformanceSection from './pages/Students/Performance';
import AttendanceSection from './pages/Students/Attendance';
import LibrarySection from './pages/Students/Library'
import AnnouncementSection from './pages/Students/Announcement';
import ProfileSection from './pages/Students/Profile';

import ClassSection from './pages/Teachers/Classes';
import StudentSection from './pages/Teachers/Students';
import TeeacherSection from './pages/Teachers/Teachers';
import CheckPerformanceSection from './pages/Teachers/Performance';
import EventSection from './pages/Teachers/Events';
import TeacherProfileSection from './pages/Teachers/Profile';
import CheckAnnouncement from './pages/Teachers/Announcement';
import AssignmentSection from './pages/Teachers/Assignments';
import CheckAttendanceSection from './pages/Teachers/Attendance';
import CheckExamSection from './pages/Teachers/Students';




function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/choose-user' element ={<ChooseUser/>} />


        <Route  path="/admin-signIn" element={<AdminSignIn />} />
        <Route  path="/student-signIn" element={<StudentSignIn />} />
        <Route  path="/teacher-signIn" element={<TeacherSignIn />} />


        <Route  path="/admin/dashboard" element={<AdminDashboard />} />
        <Route  path="/student/dashboard" element={<StudentDashboard />} />
        <Route  path="/teacher/dashboard" element={<TeacherDashboard />} />

        <Route  path="/admin/Classes" element={<Classes />} />
        <Route  path="/admin/exams" element={<Exam />} />
        <Route  path="/admin/attendance" element={<Attendance />} />
        <Route  path="/admin/performance" element={<Performance />} />
        <Route  path="/admin/teachers" element={<Teachers />} />
        <Route  path="/admin/students" element={<Students />} />
        <Route  path="/admin/assignments" element={<Assignment />} />
        <Route  path="/admin/library" element={<Library />} />
        <Route  path="/admin/communication" element={<Announcement />} />
        <Route  path="/admin/events" element={<EventCalender />} />
        <Route  path="/admin/Settings" element={<SettingsProfile />} />

        <Route  path="/student/assignments" element={<AssignmentsSection />} />
        <Route  path="/student/exams" element={<ExamSection />} />
        <Route  path="/student/performance" element={<PerformanceSection />} />
        <Route  path="/student/attendance" element={<AttendanceSection />} />
        <Route  path="/student/library" element={<LibrarySection />} />
        <Route  path="/student/communication" element={<AnnouncementSection />} />
        <Route  path="/student/Settings" element={<ProfileSection />} />

        <Route  path="/teacher/classes" element={<ClassSection />} />
        <Route  path="/teacher/students" element={<StudentSection />} />
        <Route  path="/teacher/teachers" element={<TeeacherSection />} />
        <Route  path="/teacher/assignments" element={<AssignmentSection />} />
        <Route  path="/teacher/exams" element={<CheckExamSection />} />
        <Route  path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route  path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route  path="/teacher/communication" element={<CheckAnnouncement/>} />
        <Route  path="/teacher/events" element={<EventSection />} />
        <Route  path="/teacher/Settings" element={<TeacherProfileSection />} />
      </Routes>
    </HashRouter>
  )
}

export default App
