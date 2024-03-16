import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import "./Login.scss";

 const Login=()=> {
  return (
    <div className="login">
      <div className="container_login">
        <div className="wrap_content">
          <form className="form_login">
            <h1>Login</h1>
            <div className="input_group">
              <MdOutlineEmail className="icon" />
              <input
                type="text"
                className="txt"
                placeholder="Email"
              />
            </div>
            <div className="input_group">
              <FiLock className="icon" />
              <input
                type="password"
                className="txt"
                placeholder="Password"
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                color="success"
                defaultChecked
                id="rememberCheckbox"
              />
              <label htmlFor="rememberCheckbox">Remember password</label>
            </div>
            <button
              className="btn_login btn_all"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Login
            </button>
            <span className="line">or</span>
            you don't have account?{" "}
            <NavLink to="/register" className="register">
              Register
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;