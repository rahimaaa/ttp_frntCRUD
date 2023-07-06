import React from "react";
import { Link } from "react-router-dom";

function ListItems(props) {
  const { list, deleteStudent } = props;

  const handleDelete = (studentId) => {
    deleteStudent(studentId);
  };

  return list ? (
    <div className="studentContainer">
      {list.map((item) => (
        <div className="card" key={item.id}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
          />
          <div className="container">
            <h4>{`${item.first_name} ${item.last_name}`}</h4>
            {`${item.email}`}
            <h4>{`${item.gpa}`}</h4>
          </div>
          <Link to={`/Student/${item.id}`}>
            <button>View student</button>
          </Link>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default ListItems;
