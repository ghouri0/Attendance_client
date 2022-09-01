import "antd/dist/antd.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/attendance";
import Profile from "./pages/Profile/Profile";
import Employee from "./pages/Attendance/Employee";
import AddUser from "./pages/AddUser/AddUser";
import AddProject from "./pages/AddProject/AddProject";
import ViewUsers from "./pages/viewUsers";
import "antd/dist/antd.dark.css";
import ProjectDetails from "./pages/AddProject/ProjectDetails";
import EditModules from "./pages/AddProject/EditModules";
import LogIn from "./pages/login";
import MainLayOut from "./pages/MainLayOut";
import useUser from "./customHooks/useUser";

const App = () => {

  const { submitUser } = useUser()
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="attendance" element={<Employee />} />
          <Route path="viewAttend" element={<Attendance />} />
          <Route path="addUser" element={<AddUser submitUser={submitUser} />} />
          <Route path="addProject" element={<AddProject />} />
          <Route path="projectDetails" element={<ProjectDetails />} />
          <Route path="editModule" element={<EditModules />} />
          <Route
            path="viewUsers/employees"
            element={<ViewUsers type="employee" />}
          />
          <Route
            path="viewUsers/internees"
            element={<ViewUsers type="internee" />}
          />
        </Route>
        <Route path='/login' element={<LogIn />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
