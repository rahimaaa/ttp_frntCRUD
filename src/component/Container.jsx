import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItems from "./ListItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../redux/redux-students/students.action";


export default function Container() {
    const allStudents = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);
  console.log(allStudents);
    return(
        <div>
             {allStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ListItems list={allStudents} />
      )}
      <div class="card">
      <img src="defaultimg.jpeg" alt="Avatar"/>
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
        </div>
    )
    

}
