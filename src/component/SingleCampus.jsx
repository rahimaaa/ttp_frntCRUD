import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleCampus = () => {
  const { id } = useParams();

  const campus = {
    id: id,
    name: "BC",
    students: [
      { id: 1, name: "Student 1" },
      { id: 2, name: "Student 2" },
    ],
  };

  const handleDelete = () => {};

  return (
    <div>
      <h1>Single Campus View</h1>
      <h2>Campus Details</h2>
      <p>
        Brooklyn College is a public university in Brooklyn in New York City. It
        is part of the City University of New York system and enrolls over
        17,000 undergraduate and over 2,800 graduate students on a 35-acre
        campus as of 2019.
      </p>
      <p>Campus ID: {campus.id}</p>
      <p>Campus Name: {campus.name}</p>

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
      <Link to={`/Campus/${id}/edit`}>Edit Campus</Link>
    </div>
  );
};

export default SingleCampus;
