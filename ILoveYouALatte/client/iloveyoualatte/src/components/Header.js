import React, { useState, useContext } from 'react';
import { CustomerContext } from "../providers/CustomerProvider";

export default function Header() {
  const { isLoggedIn, logout } = useContext(CustomerContext);


  return (
    <div>
     hello
    </div>
  );
}
