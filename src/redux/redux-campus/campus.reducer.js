const initialState = {
    campuses: [],
  };

export const FETCH_ALL_CAMPUSES_SUCCESS = 'FETCH_ALL_CAMPUSES_SUCCESS';
export const CREATE_CAMPUS_SUCCESS = 'CREATE_CAMPUS_SUCCESS';
export const UPDATE_CAMPUS_SUCCESS = 'UPDATE_CAMPUS_SUCCESS';
export const DELETE_CAMPUS_SUCCESS = 'DELETE_CAMPUS_SUCCESS';

  
  const campusReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_CAMPUSES_SUCCESS:
        return {
          ...state,
          campuses: action.payload,
        };
      case CREATE_CAMPUS_SUCCESS:
        return {
          ...state,
          campuses: [...state.campuses, action.payload],
        };
      case UPDATE_CAMPUS_SUCCESS:
        return {
          ...state,
          campuses: state.campuses.map(campus =>
            campus.id === action.payload.id ? action.payload : campus
          ),
        };
      case DELETE_CAMPUS_SUCCESS:
        return {
          ...state,
          campuses: state.campuses.filter(campus => campus.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default campusReducer;
  