import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/shared/navBar/navBar";
import Homepage from "./pages/homepage";
import Resume from "./pages/resumes";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" exaact element={<Homepage />} />
          <Route path="/resume" exaact element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
