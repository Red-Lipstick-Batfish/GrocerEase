import React from 'react';

const Result = ({
  recipeName,
  ingredients,
  recipeImageRef,
  servingSize,
  instructions,
}) => {
  console.log(ingredients);

  if (!ingredients) {
    return (
      <div id='place-holder'>
        <h2> What are you craving today?</h2>
      </div>
    );
  } else {
    return (
      <div id='result-container'>
        <h2>{recipeName}</h2>
        <img src={recipeImageRef} />
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}> {ingredient} </li>
          ))}
        </ul>
        <p>Serving Size: {servingSize} </p>
        <a href={instructions}> Instructions Link </a>
      </div>
    );
  }

  // const listItems = ingredients.map((ingredient) => <li>{ingredient}</li>);
};
export default Result;
