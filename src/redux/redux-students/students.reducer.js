// Initial state for the students
const initialState = {
    students: [],
  };
  
  // Reducer for handling student-related actions
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ALL_STUDENTS_SUCCESS':
        return {
          ...state,
          students: action.payload,
        };
      case 'CREATE_STUDENT_SUCCESS':
        return {
          ...state,
          students: [...state.students, action.payload],
        };
      case 'UPDATE_STUDENT_SUCCESS':
        return {
          ...state,
          students: state.students.map((student) =>
            student.id === action.payload.id ? action.payload : student
          ),
        };
      case 'DELETE_STUDENT_SUCCESS':
        return {
          ...state,
          students: state.students.filter(
            (student) => student.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  
  