import React from "react";
import { Link } from "react-router-dom";

const addCampus = () => {
  return (
    <div>
      <h1>Add Campuses Page</h1>
      <label>
        campus name:
        <input type="text" />
        <input type="submit" />
      </label>
    </div>
  );
};

export default addCampus;
