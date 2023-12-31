import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Replace with your API endpoint
  // Other configuration options...
});

//thunk action responsible for performing the asynchronous operation
//of fetching the students data from the database, it dispatches
//fetchsTUDENTSsUCCESS WITH THE RECEIVED DATA
export const fetchAllStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      dispatch(fetchAllStudentsSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
//regular action creaor that creates plain object withsuccessfull
//returns type and payload so we can pass it on to the reducer
export const fetchAllStudentsSuccess = (students) => {
  return {
    type: "FETCH_ALL_STUDENTS_SUCCESS",
    payload: students,
  };
};

export const createNewStudent = (students) => {
  return {
    type: "CREATE_STUDENT_SUCCESS",
  };
};

export const createNewStudentThunk = (studentData) => {
  return async (dispatch) => {
    try {
      const response = await api.post(
        "http://localhost:8080/api/students/AddStudent",
        studentData
      );
      const createdStudent = response.data;
      dispatch({ type: "CREATE_STUDENT_SUCCESS", payload: createdStudent });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteStudent = (students) => {
  return {
    type: "DELETE_STUDENT_SUCCESS",
  };
};

export const deleteStudentThunk = (studentId) => {
  return async (dispatch) => {
    try {
      // Perform asynchronous operation (e.g., API call)
      await api.delete(`/students/${studentId}`);

      // Dispatch regular action based on the asynchronous result
      dispatch({ type: "DELETE_STUDENT_SUCCESS", payload: studentId });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateStudent = (studentId, updatedData) => {
  return async (dispatch) => {
    // Perform asynchronous operations (e.g., API call)
    const response = await api.put(`/students/${studentId}`, updatedData);

    // Dispatch regular actions based on the asynchronous result
    dispatch({ type: "UPDATE_STUDENT_SUCCESS", payload: response.data });
  };
};
