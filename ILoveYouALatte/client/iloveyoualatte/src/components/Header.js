import React, { useState, useContext, useHistory } from 'react';
import { CustomerContext } from "../providers/CustomerProvider";
import { Link } from "react-router-dom"
import './Header.css';

export default function Header() {
  const { isLoggedIn, logout } = useContext(CustomerContext);
  
    return (
      <div>
        <nav id="nav-bar">
          {isLoggedIn &&
            <ul className="loggedIn-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">Order History</Link>
              </li>
              <li>
                <Link aria-current="page" className="nav-link"
                  style={{ cursor: "pointer" }} onClick={logout}>Logout</Link>
              </li>
            </ul>
          }
          {!isLoggedIn &&
            <ul className="loggedOut-nav">
              <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li>
                <Link className="nav-link" to="/login">Register</Link>
              </li>
            </ul>
          }
        </nav>
      </div>
    );
  }
