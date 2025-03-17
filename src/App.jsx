import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Langing";
import School from "./pages/School/School";
import Teacher from "./pages/Teachers/Teacher";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/schools" Component={School} />
      <Route path="/teachers" Component={Teacher} />
    </Routes>
  );
};

export default App;
