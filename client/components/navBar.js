import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/auth'>Log In</Link>
      </li>
    </nav>
  );
};
export default NavBar;
