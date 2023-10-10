const apiController = {};
const User = require('../models/usersModel');

apiController.getData = async (req, res, next) => {
    
  // data being passed to the backend
  const { ingr, cuisineType, mealType, dishType } = req.body;
  const cookie = req.cookie;

  // api authentications to include in the query string
  const appID = process.env.appID;
  const appKEY = process.env.appKEY;

  //query string
  const urlString = 'https://api.edamam.com/api/recipes/v2?type=public' 
    + ingredients
    + `app_id=${appID}&app_key=${appKEY}` 
    + queries;

  // joins the ingredients
  let queries;
  const ingredients = `&q=${ingr.join('%2C%20')}`;
    
  // adds restrictions
  try {
    const response = await User.find({id: cookie});
    response.restrictions.forEach(element => {
      queries += `&health=${element}`;
    });

    // adds cuisine type to the query
    queries += `&cuisineType=${cuisineType[0]}`;

    // adds meal type to the query
    queries += `&mealType=${mealType[0]}`;

    // adds dish type to the query
    queries += `&dishType=${dishType[0].split(' ').join('%20')}`;

  } catch (error) {
    return res.redirect(200, '/auth');
  }

  // fetch recipe from API
  try {
    const response = await fetch(urlString);
    const fetchedData = response.json();
    // Fetched ob
    const keyInfo = fetchedData.hits;
    // response.to
    const maxNum = fetchedData.to;
    const randomNum = Math.floor(Math.random() * maxNum);
    // ingredientLines (array), recipe (object) properties: label (dish name), image, yield (object)
    res.locals.ingredients = keyInfo[randomNum].ingredientLines;
    res.locals.recipeName = keyInfo[randomNum].recipe.label;
    // if API fetch does not have a large thumbnail image, use the standard size image url
    if (!keyInfo[randomNum].recipe.images.LARGE) {
      res.locals.recipeImageRef = keyInfo[randomNum].recipe.image;
    }
    res.locals.recipeImageRef = keyInfo[randomNum].recipe.images.LARGE.url;
    res.locals.servingSize = keyInfo[randomNum].yield;
    res.locals.instructions = keyInfo.url;
    return next();

  } catch (err) {
    return next({
      log: 'Error in apiController.getData',
      status: 400,
      message: { err: 'recipe not found' },
    });
  }

};

module.exports = apiController;