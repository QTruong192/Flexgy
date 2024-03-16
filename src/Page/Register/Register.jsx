import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";

import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container_register">
        <div className="wrap_content">
          <form className="form_register">
            <h1>Register</h1>
            <div className="input_group">
              <MdOutlineEmail className="icon" />
              <input type="text" className="txt" placeholder="Email" />
            </div>
            <div className="input_group">
              <FiLock className="icon" />
              <input type="password" className="txt" placeholder="Password" />
            </div>
            <div className="input_group">
              <FiLock className="icon" />
              <input type="password" className="txt" placeholder="Confirm password" />
            </div>
            <div className="input_group">
              <FaPhone className="icon" />
              <input type="number" className="txt" placeholder="Phone" />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                color="success"
                defaultChecked
                id="rememberCheckbox"
              />
              <label htmlFor="rememberCheckbox">
                I want to receive marketing email
              </label>
            </div>
            <button
              className="btn_register btn_all"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Confirm
            </button>
            <span className="line">or</span>
            you have account{" "}
            <NavLink to="/login" className="register">
              Login
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
