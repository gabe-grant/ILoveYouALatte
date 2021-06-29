import React, { useState, useContext, useHistory } from 'react';
import { CustomerContext } from "../providers/CustomerProvider";
import { Link } from "react-router-dom"
import './Header.css';

export default function Header() {
  const { isLoggedIn, logout } = useContext(CustomerContext);

  
  
    return (
      <div>
        <nav>
          {isLoggedIn &&
            <ul>
              <li>
                <Link aria-current="page" className="nav-link"
                  style={{ cursor: "pointer" }} onClick={logout}>Logout</Link>
              </li>
            </ul>
          }
          {!isLoggedIn &&
            <ul>
              <li>
                {/* <button onClick={()=> {history.push("/login")}}>Login</button> */}
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li>
                {/* <button onClick={()=> {history.push("/login")}}>Login</button> */}
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          }
        </nav>
      </div>
    );
  }
