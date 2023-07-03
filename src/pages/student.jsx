import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItems from "../component/ListItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../redux/redux-students/students.action";

const Student = () => {
  const allStudents = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);
console.log(allStudents)
  return (
    <div>

      <h1>All Students</h1>
      {allStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ListItems list = {allStudents}/>
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

export default Student;
