import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.scss'

 const Navbar= () => {

    return (
      <nav>
        <NavLink to="/Flexgy" className="collections">Summer vibe collection<span className='special'> 2023</span></NavLink>
        <NavLink to="/Flexgy/new">new</NavLink>
        <NavLink to="/Flexgy/bestsellers">best sellers</NavLink>
        <NavLink to="/Flexgy/shirt">shirt</NavLink>
        <NavLink to="/Flexgy/jeans">jeans</NavLink>
        <NavLink to="/Flexgy/jacket">jacket</NavLink>
        <NavLink to="/Flexgy/cloting-accessories">clothing & accessories</NavLink>
        <NavLink to="/Flexgy/collections">collections</NavLink>
        <NavLink to="/Flexgy/sale"><span className='sale'>sale</span></NavLink>
      </nav>
    );
  
};
export default Navbar;
