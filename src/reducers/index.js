import counterReducer from './counter';
import loggedReducer from './isLoggedIn';
import productReducer from './products';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  products: productReducer
})

export default allReducers;
