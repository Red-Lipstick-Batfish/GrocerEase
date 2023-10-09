import * as types from '../constants/actionTypes.js';
import axios from 'axios';

export const authSubmit = () => (dispatch, getState) => {
  const userAuth = {};
  userAuth.username = getState().auth.username;
  userAuth.password = getState().auth.password;
  userAuth.newUser = getState().auth.newUser;
  if (userAuth.newUser) {
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

export const updateUsername = (data) => ({
  type: types.UPDATE_USERNAME,
  payload: data,
});

export const updatePassword = (data) => ({
  type: types.UPDATE_PASSWORD,
  payload: data,
});

export const logSwitch = () => ({
  type: types.CHANGE_AUTH,
});
