//thunk middleware 
import thunkMiddleware from 'redux-thunk';


const middleWare = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleWare);

