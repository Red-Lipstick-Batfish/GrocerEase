import React from 'react';
import Ingredient from './Ingredient.jsx';

// React component
const Form = ({
  apiSubmit,
  updateIngr,
  addIngr,
  updateCuisine,
  updateMeal,
  updateDish,
  ingr,
  removeIngr,
  currIngr
}) => {
  // const ingrComponentArr = ingr.map((el, idx) => {
  //   <Ingredient
  //     value={ingr[el]}
  //     id={'ingredient' + idx}
  //   />;
  // });

  return (
    <div>
      <form>
        <label htmlFor='ingredient'>Include this ingredient:</label>
        <input
          id='ingredient'
          name='ingredient'
          onChange={(e) => updateIngr(e.target.value)}
          placeholder='Potato'
          required
          type='text'
        ></input>
        <button
          type='button'
          onClick={() => addIngr(document.querySelector('#ingredient').value)}
        >
          Add Ingredient
        </button>
        <br></br>
        {ingr.map((el, idx) => {
          <Ingredient value={el} id={'ingredient' + idx} />;
        })}
        <br></br>
        <label htmlFor='cuisine'>Cuisine:</label>
        <select
          id='cuisine'
          name='cuisine'
          onChange={(e) => updateCuisine(e.target.value)}
        >
          <option value=''>--Choose an option--</option>
          <option value='American'>American</option>
          <option value='Asian'>Asian</option>
          <option value='British'>British</option>
          <option value='Caribbean'>Caribbean</option>
          <option value='Chinese'>Chinese</option>
          <option value='French'>French</option>
          <option value='Indian'>Indian</option>
          <option value='Italian'>Italian</option>
          <option value='Japanese'>Japanese</option>
          <option value='Kosher'>Kosher</option>
          <option value='Mediterranean'>Mediterranean</option>
          <option value='Mexican'>Mexican</option>
          <option value='Middle Eastern'>Middle Eastern</option>
          <option value='South East Asia'>South East Asian</option>
        </select>
        <br></br>
        <label htmlFor='mealType'>Meal type:</label>
        <select id='mealType' name='mealType'>
          <option value=''>--Choose an option--</option>
          <option value='Breakfast'>Breakfast</option>
          <option value='Lunch'>Lunch</option>
          <option value='Dinner'>Dinner</option>
          <option value='Snack'>Snack</option>
        </select>
        <br></br>
        <label htmlFor='dishType'>Dish type:</label>
        <select id='dishType' name='dishType'>
          <option value=''>--Choose an option--</option>
          <option value='Main Course'>Main</option>
          <option value='Starter'>Starter</option>
          <option value='Side dish'>Side</option>
          <option value='Salad'>Salad</option>
          <option value='Sandwich'>Sando</option>
          <option value='Soup'>Soup</option>
        </select>
        <br></br>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

// export Form to HomeContainer.jsx
export default Form;
