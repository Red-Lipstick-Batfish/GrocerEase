/* eslint-disable no-case-declarations */
import * as types from '../constants/actionTypes.js';

const initialState = {
  currIngr: '',
  ingr: [],
  cuisineType: [],
  mealType: [],
  dishType: [],
  recipeList: {}
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.UPDATE_INGR:
    return {
      ...state,
      currIngr: action.payload
    };
  case types.ADD_INGR:
    const ingrArray = [...state.ingr];
    ingrArray.push(state.currIngr);
    return {
      ...state,
      ingr: ingrArray
    };
  case types.REMOVE_INGR:
    // const ingrArray = [...state.ingr];
    // ingrArray.push(state.currIngr);
    // return {
    //   ...state,
    //   ingr: ingrArray
    // };
  case types.UPDATE_CUISINE:
    const cuisineArray = [...state.cuisineType];
    cuisineArray.push(action.payload);
    return {
      ...state,
      cuisineType: cuisineArray
    };
  case types.UPDATE_MEAL:
    const mealArray = [...state.mealType];
    mealArray.push(action.payload);
    return {
      ...state,
      mealType: mealArray
    };
  case types.UPDATE_DISH:
    const dishArray = [...state.dishType];
    dishArray.push(action.payload);
    return {
      ...state,
      dishType: dishArray
    };
  case types.DISPLAY_RECIPES: 
    const recipeObj = action.payload;
    return {
      ...state,
      recipeList: recipeObj
    };
  default:
    return state;
  }
};

export default recipeReducer;