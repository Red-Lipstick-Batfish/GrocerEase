/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { authStep } from '../actions/loginActions.js';
import * as types from '../constants/actionTypes.js';

const initialState = {
  username: '',
  password: '',
  newUser: false,
  restrictions: [],
  authStep: 1,
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
    case types.UPDATE_RESTRICTIONS:
      let updatedList = [...state.restrictions];
      // when a checkbox is checked
      if (action.payload.checked) {
        updatedList = [...state.restrictions, action.payload.value];
      } else {
        updatedList.splice(state.restrictions.indexOf(action.payload.value), 1);
      }
      return {
        ...state,
        restrictions: updatedList,
      };
    case types.AUTH_STEP:
      return {
        ...state,
        authStep: state.authStep + 1,
      };
    default:
      return state;
  }
};
export default loginReducer;
