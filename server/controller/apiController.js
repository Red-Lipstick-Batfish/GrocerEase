const apiController = {};
const User = require('../models/usersModel');
require('dotenv').config();
apiController.getData = async (req, res, next) => {
  // data being passed to the backend
  const { ingr, cuisineType, mealType, dishType } = req.query;
  const cookie = req.cookie;

  // api authentications to include in the query string
  const appID = process.env.appID;
  const appKEY = process.env.appKEY;

  //https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=43a19eff&app_key=6e307c358a78b63cf5043926e57a6eca&cuisineType=American&mealType=Lunch&dishType=Main%20course

  //http://localhost:8080/?ingredient=1-5&cuisine=American&mealType=Breakfast&dishType=Main+Course

  // joins the ingredients
  let queries = '';
  const ingredients = `&q=${ingr.join('%2C%20')}`;

  // adds restrictions
  // try {
  // const response = await User.find({ id: cookie });
  // response.restrictions.forEach((element) => {
  //   queries += `&health=${element}`;
  // });

  // adds cuisine type to the query
  if (cuisineType !== undefined) {
    //check if cuisine type is passed in
    queries += `&cuisineType=${cuisineType[0]}`;
  }
  // adds meal type to the query
  if (mealType !== undefined) {
    //check if meal dish type is passed in
    queries += `&mealType=${mealType[0]}`;
  }
  if (dishType !== undefined) {
    //check if dish type is passed in
    queries += `&dishType=${dishType[0].split(' ').join('%20')}`; // adds dish type to the query
  }
  // } catch (error) {
  //   return res.redirect(200, '/auth');
  // }

  // query string
  const urlString =
    'https://api.edamam.com/api/recipes/v2?type=public' +
    ingredients +
    `&app_id=${appID}&app_key=${appKEY}` +
    queries;

  // fetch recipe from API
  try {
    const response = await fetch(urlString);
    const fetchedData = await response.json();
    // Fetched ob
    const keyInfo = fetchedData.hits;
    if (keyInfo.length === 0) {
      res.locals.status = 204;
      return next();
    }
    // response.to
    const maxNum = fetchedData.to;

    const randomNum = Math.floor(Math.random() * maxNum);

    // ingredientLines (array), recipe (object) properties: label (dish name), image, yield (object)
    res.locals.ingredients = keyInfo[randomNum].recipe.ingredientLines;
    res.locals.recipeName = keyInfo[randomNum].recipe.label;
    // if API fetch does not have a large thumbnail image, use the standard size image url
    if (!keyInfo[randomNum].recipe.images.LARGE) {
      res.locals.recipeImageRef = keyInfo[randomNum].recipe.image;
    } else {
      // otherwise use the large image size
      res.locals.recipeImageRef = keyInfo[randomNum].recipe.images.LARGE.url;
    }
    res.locals.servingSize = keyInfo[randomNum].recipe.yield;
    res.locals.instructions = keyInfo[randomNum].recipe.url; //keyInfo.url
    console.log(res.locals);
    res.locals.status = 200;
    return next();
  } catch (err) {
    return next({
      log: 'apiController.getData',
      status: 400,
      message: { err: 'recipe not found' },
    });
  }
};

module.exports = apiController;
