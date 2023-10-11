import * as types from '../constants/actionTypes.js';
import axios from 'axios';
import cookie from 'cookie';

export const apiSubmit = () => (dispatch, getState) => {
  const apiReq = {};
  apiReq.user = document.cookie.SSID;
  apiReq.ingr = getState().recipe.ingr;
  apiReq.cuisineType = getState().recipe.cuisineType;
  apiReq.mealType = getState().recipe.mealType;
  apiReq.dishType = getState().recipe.dishType;
  axios
    .get('/api', {
      params: {
        ingr: apiReq.ingr,
        cuisineType: apiReq.cuisineType,
        mealType: apiReq.mealType,
        dishType: apiReq.dishType,
      },
    })
    .then(({ status, data }) => {
      if (status === 200) {
        //code for dispatch
        dispatch({ type: types.DISPLAY_RECIPES, payload: data });
      } else if (status === 204) {
        //check if recipe not found
        window.alert('No Recipe Found, try again.');
      }
    })
    .catch((error) => {
      console.log('Error occurred: ', error);
    });
};

export const updateIngr = (data) => ({
  type: types.UPDATE_INGR,
  payload: data,
});

export const addIngr = (data) => ({
  type: types.ADD_INGR,
  payload: data,
});

export const removeIngr = (data) => ({
  type: types.REMOVE_INGR,
  payload: data,
});

export const updateCuisine = (data) => ({
  type: types.UPDATE_CUISINE,
  payload: data,
});

export const updateMeal = (data) => ({
  type: types.UPDATE_MEAL,
  payload: data,
});

export const updateDish = (data) => ({
  type: types.UPDATE_DISH,
  payload: data,
});
