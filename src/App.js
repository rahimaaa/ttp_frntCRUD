import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./component/home";
import Campus from "./component/campus";
import Student from "./component/student";
import AddCampus from "./component/addCampus";
import SingleCampus from "./component/SingleCampus";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Campus">Campus</Link>
            </li>
            <li>
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
          <Route path="/Campus/:id" element={<SingleCampus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
