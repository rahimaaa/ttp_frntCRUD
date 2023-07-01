import axios from 'axios';

const api = axios.create({
  baseURL: 'hhttp://localhost:8080/api/students', // Replace with your API endpoint
  // Other configuration options...
});

export const createStudent = (studentData) => {
    return async (dispatch) => {
      // Perform asynchronous operations (e.g., API call)
      const response = await api.post('/students', studentData);
  
      // Dispatch regular actions based on the asynchronous result
      dispatch({ type: 'CREATE_STUDENT_SUCCESS', payload: response.data });
    };
  };
  
  export const updateStudent = (studentId, updatedData) => {
    return async (dispatch) => {
      // Perform asynchronous operations (e.g., API call)
      const response = await api.put(`/students/${studentId}`, updatedData);
  
      // Dispatch regular actions based on the asynchronous result
      dispatch({ type: 'UPDATE_STUDENT_SUCCESS', payload: response.data });
    };
  };
  
  export const deleteStudent = (studentId) => {
    return async (dispatch) => {
      try {
        // Perform asynchronous operation (e.g., API call)
        await api.delete(`/students/${studentId}`);
        
        // Dispatch regular action based on the asynchronous result
        dispatch({ type: 'DELETE_STUDENT_SUCCESS', payload: studentId });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
 
//thunk action responsible for performing the asynchronous operation
//of fetching the students data from the database, it dispatches 
//fetchsTUDENTSsUCCESS WITH THE RECEIVED DATA
export const fetchAllStudents = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_STUDENTS_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/students");
      console.log("FETCH_ALL_STUDENTS_THUNK completed");
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
    type: 'FETCH_ALL_STUDENTS_SUCCESS',
    payload: students,
  };
};

