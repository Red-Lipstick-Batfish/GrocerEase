import * as types from '../constants/actionTypes.js';
import axios from 'axios';

// Send login/signup info to backend
export const authSubmit = () => (dispatch, getState) => {
  const userAuth = {};
  userAuth.username = getState().login.username;
  userAuth.password = getState().login.password;
  userAuth.newUser = getState().login.newUser;
  if (userAuth.newUser) {
    userAuth.restrictions = getState().login.restrictions;
    axios
      .post('/signup', userAuth)
      .then(({ status }) => {
        if (status === 202) dispatch({ type: types.AUTH_SUBMIT });
      })
      .catch(console.error);
  } else {
    axios
      .get('/login', userAuth)
      .then(({ status }) => {
        if (status === 200) dispatch({ type: types.AUTH_SUBMIT });
      })
      .catch(console.error);
  }
};

export const updateAuthStep = () => ({
  type: types.AUTH_STEP,
});

export const updateRestrictions = (data) => ({
  type: types.UPDATE_RESTRICTIONS,
  payload: data,
});

export const updateUsername = (data) => ({
  type: types.UPDATE_USERNAME,
  payload: data,
});

export const updatePassword = (data) => ({
  type: types.UPDATE_PASSWORD,
  payload: data,
});

// change from login to signup page and vice versa
export const logSwitch = () => ({
  type: types.CHANGE_AUTH,
});
