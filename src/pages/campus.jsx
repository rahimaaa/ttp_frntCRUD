
import ListItemCampus from "../component/ListItemCampus";
import { fetchAllCampuses } from "../redux/redux-campus/campus.actions";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Campus = () => {
  const allCampuses = useSelector((state) => state.campuses.campuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);
  console.log(allCampuses);
  return (
    <div>
      <h1>All Campuses</h1>
      {allCampuses.length === 0 ? (
        <p>No Campuses found.</p>
      ) : (
        <ListItemCampus list={allCampuses} />
      )}

      <div>
        <Link to="/Campus/AddCampus"><button style = {{height:'50px', fontSize:'20px'}}>Add New Campus</button></Link>
      </div>
      <div>
        <Link to="/Campus/1">View Campus 1</Link>
      </div>
    </div>
  );
};

export default Campus;
