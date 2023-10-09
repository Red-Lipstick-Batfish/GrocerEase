import React from 'react';
import Restriction from './Restriction';
//list of restrictions from API
const restList = [
  'Alcohol-Free',
  'Celery-Free',
  'Crustacean-Free',
  'Dairy-Free',
  'DASH',
  'Egg-Free',
  'Fish-Free',
  'FODMAP-Free',
  'Gluten-Free',
  'Immuno-Supportive',
  'Keto-Friendly',
  'Kidney-Friendly',
  'Kosher',
  'Mediterranean',
  'Mollusk-Free',
  'Mustard-Free',
  'Paleo',
  'Peanut-Free',
  'Pescatarian',
  'Pork-Free',
  'Red-Meat-Free',
  'Sesame-Free',
  'Shellfish-Free',
  'Soy-Free',
  'Sugar-Conscious',
  'Sulfite-Free',
  'Tree-Nut-Free',
  'Vegan',
  'Vegetarian',
  'Wheat-Free',
];

const Profile = (props) => (
  <div className='profile-wrap'>
    <h1>Profile Creation</h1>
    <h3>Dietary Preferences and Restrictions</h3>
    <p>Please select all that apply: </p>
    <div className='restriction-list'>
      <ul>
        {restList.map((restriction, idx) => (
          <Restriction key={idx} restriction={restriction} {...props} />
        ))}
      </ul>
    </div>
    <button onClick={(e) => props.authSubmit()}>
      Complete Profile Creation
    </button>
  </div>
);

export default Profile;
