import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Campus from "./pages/campus";
import Student from "./pages/student";
import AddCampus from "./pages/addCampus";
import AddStudent from "./pages/addStudent";
import SingleCampus from "./pages/SingleCampus";
import SingleStudent from "./pages/SingleStudent";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="nav">
          <Link className="home" to="/">
            Home
          </Link>
          <ul>
            <li className="campus">
              <Link to="/Campus">Campus</Link>
            </li>
            <li className="student">
              <Link to="/Student">Student</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Campus/*" element={<Campus />} />
          <Route path="/Campus/addCampus" element={<AddCampus />} />
          <Route path="/Student/*" element={<Student />} />
          <Route path="/Student/addStudent" element={<AddStudent />} />
          <Route path="/Campus/:id" element={<SingleCampus />} />
          <Route path="/Student/:id" element={<SingleStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
