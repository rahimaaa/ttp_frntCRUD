import { combineReducers } from 'redux';
import studentReducer from './redux-students/students.reducer';
import campusReducer from './redux-campus/campus.reducer';

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
});

export default rootReducer;
