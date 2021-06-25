import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";

export default function Login() {
  const history = useHistory();
  const { login } = useContext(CustomerContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => history.push("/"))
      .catch(() => alert("Invalid email or password"));
  };

  return (
    
    <form onSubmit={loginSubmit}>
      <fieldset>
        <formGroup>
          <label for="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </formGroup>
        <formGroup>
          <label for="password">Password</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </formGroup>
        <formGroup>
          <button>Login</button>
        </formGroup>
        <em>
          Not registered? <Link to="register">Register</Link>
        </em>
      </fieldset>
    </form>
    
  );
}