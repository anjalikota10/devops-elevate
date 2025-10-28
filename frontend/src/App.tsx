import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatIsDevOps from "./pages/WhatIsDevOps";
import BeforeDevOps from "./pages/BeforeDevOps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhatIsDevOps />} />
        <Route path="/before-devops" element={<BeforeDevOps />} />
      </Routes>
    </Router>
  );
}

export default App;
