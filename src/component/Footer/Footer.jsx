import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { GiIceCube } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <section className="address">
        <div className="address_detail">
          <h3>Shop</h3>
          <NavLink>t-shirt</NavLink>
          <NavLink>jeans</NavLink>
          <NavLink>jacket</NavLink>
          <NavLink>clothing & accessories</NavLink>
        </div>
        <div className="address_detail">
          <div className="address_detail">
            <h3>Community</h3>
            <NavLink>about us</NavLink>
            <NavLink>events</NavLink>
            <NavLink>the flexfy blog</NavLink>
            <NavLink>join our rewards program</NavLink>
          </div>
        </div>
        <div className="address_detail">
          <h3>Learn</h3>
          <NavLink>fit guilde</NavLink>
          <NavLink>size charts</NavLink>
          <NavLink>contact us</NavLink>
          <NavLink>faqs</NavLink>
        </div>
        <div className="address_detail">
          <h3>Resources</h3>
          <NavLink>return & exchanges &#40;us&#41;</NavLink>
          <NavLink>return &#40;canada&#41;</NavLink>
          <NavLink>privacy & terms</NavLink>
          <NavLink>careers</NavLink>
        </div>
        <div className="address_detail sub_info">
          <h1 to="/" className="logo">
            <GiIceCube className="logo_icon" />
            flexgy
          </h1>
          <h3>Sign up for $50 OFF your first order!</h3>
          <div className="wrap_email">
            <input type="text" placeholder="email address" />
            <button>join</button>
          </div>
          <p>
            *By signup, you agree to receive marketing emails from LIVELY. You
            can unsubscribe any time by clicking the link at the bottom of our
            emails.
          </p>
        </div>
      </section>
      <div className="coppy_right">
        Copyright 2022 © <span>Nguyen Huynh Quang Truong</span>
      </div>
    </footer>
  );
};
export default Footer;
