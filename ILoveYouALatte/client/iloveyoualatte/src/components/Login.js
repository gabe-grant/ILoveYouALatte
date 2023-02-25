import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import './Login.css';


export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(CustomerContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
    login(email, password)
      .then(() => navigate("/"))
      .catch(() => alert("Invalid email or password"));
  };

 
  return (
    
    <form className="login-form" onSubmit={loginSubmit}>
      <fieldset>
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button>Login</button>
        </div>
        <em>
          Not registered? <Link to="/latte">Register</Link>
        </em>
      </fieldset>
    </form>
    
  );
}