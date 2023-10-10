import { combineReducers } from 'redux';
import loginReducer from './loginReducers.js';
import recipeReducer from './recipeReducer.js';

const reducers = combineReducers({ 
  login: loginReducer,
  recipe: recipeReducer, 
});

export default reducers;
