import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { deleteCampus } from "../redux/redux-campus/campus.actions"
import { useDispatch, useSelector } from "react-redux";


const SingleCampus = () => {
  const { id } = useParams();

  const campus = {
    id: id,
    name: id.name,
    adress: id.address,
    description: id.description,
    students: [
      
    ],
  };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllStudents());
  // }, [dispatch]);

  const handleDelete = (e) => {
    // useEffect(() => {
    //   dispatch(deleteCampus(e));
    // }, [dispatch]);
  //   dispatchEvent(deleteCampus(e));
  };

  return (
    <div>
      <h1>Single Campus View</h1>
      <h2>Campus Details</h2> 
      <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
          />
      <p>Campus ID: {campus.id}</p>
      <p>Campus Name: {campus.name}</p>
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>
     

      <h2>Enrolled Students</h2>
      {campus.students.length === 0 ? (
        <p>No students enrolled at this campus.</p>
      ) : (
        <ul>
          {campus.students.map((student) => (
            <li key={student.id}>
              <Link to={`/Student/${student.id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleDelete}>Delete Campus</button>

      <Link to={`/Campus/${id}/edit`}> <button>Edit Campus</button> </Link>
    </div>
  );
};

export default SingleCampus;
