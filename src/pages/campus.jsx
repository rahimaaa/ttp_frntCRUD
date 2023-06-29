import React from "react";
import { Link } from "react-router-dom";
import listItems from "../component/listItems";

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
      <div>
        <Link to="/Campus/AddCampus">Add New Campus</Link>
      </div>
      <div>
        <Link to="/Campus/1">View Campus 1</Link>
      </div>
    </div>
  );
};

export default Campus;
