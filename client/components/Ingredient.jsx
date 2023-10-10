import React from "react";

const Ingredient = ({
  value,
  removeIngr,
  id
}) => {
  return (
    <div id={id}>
      <p>{value}</p>
      <button onClick={() => removeIngr(document.querySelector('#id'))}type='button'>Remove</button>
    </div>
  );
};

export default Ingredient;