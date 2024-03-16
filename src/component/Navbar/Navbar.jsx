import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.scss'

 const Navbar= () => {

    return (
      <nav>
        <NavLink to="/" className="collections">Summer vibe collection<span className='special'> 2023</span></NavLink>
        <NavLink to="/new">new</NavLink>
        <NavLink to="/bestsellers">best sellers</NavLink>
        <NavLink to="/shirt">shirt</NavLink>
        <NavLink to="/jeans">jeans</NavLink>
        <NavLink to="/jacket">jacket</NavLink>
        <NavLink to="/cloting-accessories">clothing & accessories</NavLink>
        <NavLink to="/collections">collections</NavLink>
        <NavLink to="/sale"><span className='sale'>sale</span></NavLink>
      </nav>
    );
  
};
export default Navbar;
