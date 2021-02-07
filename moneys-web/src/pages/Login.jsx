import React, { useState } from "react";
import { Login } from "../helpers/HTTP";
import PropTypes from "prop-types";
import "./Login.css";

export default function LoginPage({ setToken }) {
  //#region HOOKS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //#endregion

  //#region COMPONENT LOGIC
  const getSubmitted = async (event) => {
    event.preventDefault();

    try {
      var queryResult = await Login(email, password);
      const token = await queryResult.data.data.login.token;
      setToken(token);
      sessionStorage.setItem("token", JSON.stringify(token));
      window.location.reload(true);
    } catch (error) {
      console.log("NETWORK ERR", error);
    }
  };
  //#endregion

  return (
    <form className="auth-form" onSubmit={getSubmitted}>
      <div className="form-control">
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
