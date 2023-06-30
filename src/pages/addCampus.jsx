import React from "react";
import { Link } from "react-router-dom";

const addCampus = () => {
  return (
    <div>
      <h1>Add Campus Page</h1>
      
      <label>
        Name:
        <input type="text" />
        </label>
        <label>
        image:
        <input type="URL" />
      </label>
      <label>
        Description:
        <input type="text" />
        </label>
        <label>
        email:
        <input type="text" />
        </label>
        <label>
        address:
        <input type="text" />
        </label>
       <button>Submit</button>
    </div>
  );
};

export default addCampus;
