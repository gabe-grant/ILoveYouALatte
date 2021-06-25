import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";

export default function Header() {
  const { isLoggedIn, logout } = useContext(CustomerContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <navbar>
        {/* <NavbarBrand tag={RRNavLink} to="/">Grace Hopper Wisdom</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <nav className="mr-auto" navbar>
            {isLoggedIn &&
              <>
                <navitem>
                  <navlink to="/add">Add Quote</navlink>
                </navitem>
                <navitem>
                  <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                </navitem>
              </>
            }
            {!isLoggedIn &&
              <>
                <naitem>
                  <navlink to="/login">Login</navlink>
                </naitem>
                <naitem>
                  <navlink to="/register">Register</navlink>
                </naitem>
              </>
            }
          </nav>
          <nav navbar>
            <navItem>
              <a aria-current="page" className="nav-link"
                href="https://www.youtube.com/watch?v=3N_ywhx6_K0"
                target="_new">Grace Hopper on Letterman</a>
            </navItem>
          </nav>
        {/* </Collapse> */}
      </navbar>
    </div>
  );
}
