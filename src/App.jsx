import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Langing";
import School from "./pages/School/School";
import Teacher from "./pages/Teachers/Teacher";
import Student from "./pages/Students/Student";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/schools" Component={School} />
      <Route path="/teachers" Component={Teacher} />
      <Route path="/students" Component={Student} />
    </Routes>
  );
};

export default App;
