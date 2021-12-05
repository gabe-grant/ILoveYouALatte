import React, { useState, useContext, useHistory, useEffect } from 'react';
import { CustomerContext } from "../providers/CustomerProvider";
import { DrinkOrderContext } from '../providers/DrinkOrderProvider';
import { Link } from "react-router-dom"
import './Header.css';

export default function Header() {
  const { isLoggedIn, logout } = useContext(CustomerContext);
  const { getAllDrinkOrders, drinkorders } = useContext(DrinkOrderContext);
  
  
    return (
      <div>
        
        <nav id="nav-bar">
          <section>
            {isLoggedIn ? drinkorders.length * 10 : <></>}
          </section>
          {isLoggedIn &&
            <ul className="loggedIn-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">Order History</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
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
