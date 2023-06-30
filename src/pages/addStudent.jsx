import React from "react";

function addStudent() {
  return (
    <div>
      <h1>Add student Page</h1>
      
      <label>
        Firstname:
        <input type="text" />
        </label>
        <label>
        Lastname:
        <input type="text" />
        </label>
        <label>
        email:
        <input type="text" />
        </label>
        <label>
        image:
        <input type="URL" />
      </label>
      <label>
        gpa:
        <input type="number" />
      </label>
       <button>Submit</button>
    </div>
  );
}

export default addStudent;
