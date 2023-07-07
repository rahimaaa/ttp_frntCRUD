import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Action Types
export const FETCH_ALL_CAMPUSES_SUCCESS = "FETCH_ALL_CAMPUSES_SUCCESS";
export const CREATE_CAMPUS_SUCCESS = "CREATE_CAMPUS_SUCCESS";
export const UPDATE_CAMPUS_SUCCESS = "UPDATE_CAMPUS_SUCCESS";
export const DELETE_CAMPUS_SUCCESS = "DELETE_CAMPUS_SUCCESS";

// Thunk Actions
export const fetchAllCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("http://localhost:8080/api/campus");
      dispatch(fetchAllCampusesSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const fetchAllCampusesSuccess = (campuses) => {
  return {
    type: "FETCH_ALL_CAMPUSES_SUCCESS",
    payload: campuses,
  };
};

export const createNewCampus = (campuses) => {
  return {
    type: "CREATE_CAMPUS_SUCCESS",
  };
};
export const createCampus = (campusData) => {
  return async (dispatch) => {
    try {
      const response = await api.post(
        "http://localhost:8080/api/campus/AddCampus",
        campusData
      );
      const createdCampus = response.data;
      dispatch({ type: "CREATE_CAMPUS_SUCCESS", payload: createdCampus });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateCampus = (campusId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/campus/${campusId}`, updatedData);
      dispatch(updateCampusSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
export const deleteCampus = (campuses) => {
  return {
    type: "DELETE_CAMPUS_SUCCESS",
  };
};

export const deleteCampusThunk = (campusId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/campus/${campusId}`);
      dispatch({ type: "DELETE_CAMPUS_SUCCESS", payload: campusId });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateCampusSuccess = (campus) => ({
  type: UPDATE_CAMPUS_SUCCESS,
  payload: campus,
});
