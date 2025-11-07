import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import WhatIsDevOps from "./pages/WhatIsDevOps";
import BeforeDevOps from "./pages/BeforeDevOps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="whatisdevops" element={<WhatIsDevOps />} />
        <Route path="/before-devops" element={<BeforeDevOps />} />
      </Routes>
    </Router>
  );
}

export default App;
