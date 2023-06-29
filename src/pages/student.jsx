import React from "react";
import { Link } from "react-router-dom";
import listItems from "../component/listItems";

const student = (props) => {
  const student = [];

  return (
    <div>
      <h1>All Student</h1>
      {student.length === 0 ? (
        <p>No student found.</p>
      ) : (
        <ul>{listItems(student)}</ul>
      )}
      <div>
        <Link to="/Student/AddStudent">Add New Student</Link>
      </div>
      <div>
        <Link to="/Student/1">View Student 1</Link>
      </div>
    </div>
  );
};

export default student;
