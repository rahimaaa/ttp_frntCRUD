import React from "react";
import { Link } from "react-router-dom";

function ListItems(props) {
  return props.list ? (
    props.list.map((item) => {
      return (
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
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      );
    })
  ) : (
    <h1>Loading...</h1>
  );
}

export default ListItems;
