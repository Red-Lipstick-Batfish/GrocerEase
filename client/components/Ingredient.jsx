import { name } from "file-loader";
import React from "react";
import { ids } from "webpack";

const Ingredient = ({
  value
}) => {
  return (
    <div id='ingredient'>
      <p>{value}</p>
      <button {/* onClick={} */} type='button'>Remove</button>
    </div>
  );
};

export default Ingredient;