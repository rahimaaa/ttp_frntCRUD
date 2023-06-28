import React from "react";
import { Link } from "react-router-dom";

const Campus = () => {
  const campuses = [];

  return (
    <div>
      <h1>All Campuses</h1>
      {campuses.length === 0 ? (
        <p>No campuses found.</p>
      ) : (
        <ul>
          {campuses.map((campus) => (
            <li></li>
          ))}
        </ul>
      )}
      <Link to="/Campus/AddCampus">Add New Campus</Link>
    </div>
  );
};

export default Campus;
