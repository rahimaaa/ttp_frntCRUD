import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItems from "../component/ListItems";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudents,
  deleteStudentThunk,
} from "../redux/redux-students/students.action";

const Student = () => {
  const allStudents = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const deleteStudent = (studentId) => {
    dispatch(deleteStudentThunk(studentId));
  };

  return (
    <div>
      <h1>All Students</h1>
      {allStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ListItems list={allStudents} deleteStudent={deleteStudent} />
      )}

      <div>
        <Link to="/Student/AddStudent">
          <button style={{ height: "50px", fontSize: "20px" }}>
            Add New Student
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Student;
