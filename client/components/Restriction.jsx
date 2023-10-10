import React from 'react';

const Restriction = ({ updateRestrictions, restriction }) => {
  const handleClick = (e) => {
    updateRestrictions(e.target);
  };
  return (
    <div className='preference-check'>
      <input
        type='checkbox'
        id={restriction}
        name={restriction}
        onChange={(e) => handleClick(e)}
        value={restriction.toLowerCase()}
      />
      <label htmlFor={restriction}>{restriction}</label>
    </div>
  );
};

export default Restriction;
