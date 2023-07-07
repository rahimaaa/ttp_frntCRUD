import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCampus } from "../redux/redux-campus/campus.actions";

function AddCampus() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    campusName: "",
    address: "",
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
    dispatch(createCampus(state));
  };

  return (
    <div>
      <h1>Add Campus Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Campus Name:
          <input
            name="campusName"
            type="text"
            value={state.campusName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={state.address}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default AddCampus;
