import React from 'react';

// React component
const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="calories">
          Choose a calorie range: 
        </label>
        <select name="calories" id="calories">
          <option value='100+'>100-200</option>
          <option value='200+'>200-300</option>
          <option value='300+'>300-400</option>
          <option value='400+'>400-500</option>
          <option value='500+'>500-600</option>
          <option value='600+'>600-700</option>
          <option value='700+'>700-800</option>
          <option value='800+'>800-900</option>
        </select>
        <br></br>
        
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// export Form to HomeContainer.jsx
export default Form;