import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillTest from "./pages/SkillTest";
import CodingProblem from "./pages/CodingProblem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/skill-test" element={<SkillTest />} />
        <Route path="/skill-test/:topic" element={<CodingProblem />} />
      </Routes>
    </Router>
  );
}

export default App;
