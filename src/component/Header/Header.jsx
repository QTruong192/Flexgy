import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiIceCube } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <NavLink to="/">rewards</NavLink>
        <NavLink to="/Product">fit guide</NavLink>
      </div>
      <NavLink to="/" className="logo">
        <GiIceCube className="logo_icon" />
        flex<span>g</span>y
      </NavLink>
      <div className="header_right">
        <div className="search">
          <input
            className="search_text"
            type="text"
            name=""
            id=""
            placeholder="search"
          />
          <CiSearch className="search_icon" />
        </div>
        <NavLink to="/login" className="login wrap-btn">
          <div className="tooltip_login">
            <span>Login</span>
          </div>
          <FaRegUser />
        </NavLink>
        <NavLink to="/cart" className="cart wrap-btn">
          <div className="tooltip_cart">
            <span>cart</span>
          </div>
          <HiOutlineShoppingBag />
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
