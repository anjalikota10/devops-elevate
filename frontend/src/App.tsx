import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatIsDevOps from "./pages/WhatIsDevOps";
import WhyDevOps from "./pages/WhyDevOps";
import NoDevOps from "./pages/NoDevOps";
import BeforeDevOps from "./pages/BeforeDevOps";

function App() {
  return (
    <Router>
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
