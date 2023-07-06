import React from "react";
import { Link } from "react-router-dom";

function ListItemCampus(props) {
  return props.list ? (
    <div class = "studentContainer">
    {props.list.map((item) => {

      return (
        <div className="card" key={item.id}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
          />
          <div className="container">
            <h4>{`${item.name}`}</h4>
            <h4>{`${item.address}`}</h4>
            {`${item.description}`}

            
          </div>
          <Link to={`/Campus/${item.id}`}>
            <button>View Campus</button>
          </Link>
          <button>Delete</button>
        </div>
        
      );
      
    })}
    </div>
    
  ) : (
    <h1>Loading...</h1>
    
  );
  
}

export default ListItemCampus;
