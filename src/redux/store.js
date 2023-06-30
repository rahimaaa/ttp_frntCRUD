import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';

const middleWare = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleWare);

export default store;
