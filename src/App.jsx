import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Langing";
import School from "./pages/School/School";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/schools" Component={School} />
    </Routes>
  );
};

export default App;
