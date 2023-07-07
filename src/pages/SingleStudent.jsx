import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudentById,
  deleteStudent,
} from "../redux/redux-students/students.action";

const SingleStudent = () => {
  const { id } = useParams();
  const student = useSelector((state) => state.students.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentById(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteStudent(id));
  };

  if (!student) {
    return <p>Loading student...</p>;
  }

  return (
    <div>
      <h1>Single Student View</h1>
      <h2>Student Details</h2>
      <p>Student ID: {student.id}</p>
      <p>First Name: {student.first_name}</p>
      <p>Last Name: {student.last_name}</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>

      <h2>Enrolled Campus</h2>
      {student.campus ? (
        <div>
          <p>Campus ID: {student.campus.id}</p>
          <p>Campus Name: {student.campus.name}</p>
          <Link to={`/Campus/${student.campus.id}`}>View Enrolled Campus</Link>
        </div>
      ) : (
        <p>Student is not currently enrolled at a campus.</p>
      )}

      <button onClick={handleDelete}>Delete Student</button>
      <Link to={`/Student/${id}/edit`}>Edit Student</Link>
    </div>
  );
};

export default SingleStudent;
