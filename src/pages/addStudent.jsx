import React, { useState } from "react";

function AddStudent() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gpa: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>Add student Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="first_name"
            type="text"
            value={state.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="last_name"
            type="text"
            value={state.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          GPA:
          <input
            name="gpa"
            type="number"
            value={state.gpa}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default AddStudent;
