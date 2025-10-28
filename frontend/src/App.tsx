import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WhatIsDevOps from "./pages/WhatIsDevOps";
import WhyDevOps from "./pages/WhyDevOps";
import NoDevOps from "./pages/NoDevOps";
import BeforeDevOps from "./pages/BeforeDevOps";

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">What is DevOps</Link>
        <Link to="/why-devops">Why DevOps</Link>
        <Link to="/no-devops">What if there is no DevOps?</Link>
        <Link to="/before-devops">Before DevOps</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WhatIsDevOps />} />
        <Route path="/why-devops" element={<WhyDevOps />} />
        <Route path="/no-devops" element={<NoDevOps />} />
        <Route path="/before-devops" element={<BeforeDevOps />} />
      </Routes>
    </Router>
  );
}

export default App;
