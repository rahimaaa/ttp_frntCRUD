import React from "react";
import { Link } from "react-router-dom";
import listItems from "./listItems";

const Campus = () => {
  const campuses = [];

  return (
    <div>
      <h1>All Campuses</h1>
      {campuses.length === 0 ? (
        <p>No campuses found.</p>
      ) : (
        <ul>{listItems(campuses)}</ul>
      )}
      <Link to="/Campus/AddCampus">Add New Campus</Link>
    </div>
  );
};

export default Campus;
