import ListItemCampus from "../component/ListItemCampus";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCampuses,
  deleteCampusThunk,
} from "../redux/redux-campus/campus.actions";

const Campus = () => {
  const allCampuses = useSelector((state) => state.campuses.campuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  const deleteCampus = (campusId) => {
    dispatch(deleteCampusThunk(campusId));
  };

  return (
    <div>
      <h1>All Campuses</h1>
      {allCampuses.length === 0 ? (
        <p>No Campuses found.</p>
      ) : (
        <ListItemCampus list={allCampuses} deleteCampus={deleteCampus} />
      )}

      <div>
        <Link to="/Campus/AddCampus">
          <button style={{ height: "50px", fontSize: "20px" }}>
            Add New Campus
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Campus;
