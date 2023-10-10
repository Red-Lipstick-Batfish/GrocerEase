import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/auth'>Auth Page</Link>
      </li>
    </nav>
  );
};
export default Navbar;
