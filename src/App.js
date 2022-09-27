import "./App.css";
import SideBar from "./components/Dashboard/SideBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Dashboard/Header";

import Dashboard from "./pages/Navdashboard/Dashboard";
import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import Parents from "./pages/parents/Parents";
import Subjects from "./pages/subjects/subjects";
// import Division from "./pages/division/Division";
import Class from "./pages/class/Class";
import ManageAttendance from "./pages/attendance/ManageAttendance";
// import ManageMarks from "./pages/marks/ManageMarks";
// import Message from "./pages/message/Message";
// import Payments from "./pages/payments/Payments";
import Section from "./pages/sections/Section";
import ViewUser from "./pages/students/ViewUser";
import EditStu from "./pages/students/EditStu.jsx";
import AddStudents from "./pages/students/AddStudents";
// import Transport from "./pages/transport/Transport";
// import Library from "./pages/library/Library";
// import Exam from "./pages/exam/Exam";
// import Configuration from "./pages/configuration/Configuration";
// import Accounting from "./pages/accounting/Accounting";




function App() {

// const parentAlert=()=>{
//   alert("hello")
// }

  return (
    <>
    <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/sections" element={<Section />} />
          {/* <Route path="/division" element={<Division />} /> */}
          <Route path="/class" element={<Class />} />
          <Route path="/attendance" element={<ManageAttendance />} />
          {/* <Route path="/exam" element={<Exam />} /> */}
          {/* <Route path="/marks" element={<ManageMarks />} /> */}
          {/* <Route path="/payments" element={<Payments />} /> */}
          {/* <Route path="/message" element={<Message />} /> */}
          {/* <Route path="/accounting" element={<Accounting />} /> */}
          {/* <Route path="/transport" element={<Transport />} /> */}
          {/* <Route path="/library" element={<Library />} /> */}
          {/* <Route path="/configuration" element={<Configuration />} /> */}
          {/* <Route path="/users/add" element={<AddUser />} /> */}
        <Route path="/students/users/edit/:id" element={<EditStu />} />
        <Route path="/students/users/:id" element={<ViewUser />} />
        <Route path="/students/add/" element={<AddStudents />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </>
  );
}

export default App;
