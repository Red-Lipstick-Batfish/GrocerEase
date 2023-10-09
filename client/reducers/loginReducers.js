/* eslint-disable indent */
import * as types from '../constants/actionTypes.js';

const initialState = {
  username: '',
  password: '',
  newUser: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_AUTH:
      return state.newUser === false
        ? { ...state, newUser: true }
        : { ...state, newUser: false };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case types.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
