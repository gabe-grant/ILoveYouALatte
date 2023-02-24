import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import Login from "./Login";
import { DrinkCard } from "./DrinkCard";
import { DrinkOrderList } from './DrinkOrderList'
import { LatteForm } from './LatteForm'
import { DrinkOrderDelete } from './DrinkOrderDelete'


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(CustomerContext);

  return (
    <main>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DrinkCard />} />
        <Route path="/latte" element={isLoggedIn ? <LatteForm /> : <Navigate to="/login" />} />
        <Route path="/history" element={isLoggedIn ? <DrinkOrderList /> : <Navigate to="/login" />} />
        <Route path="/edit/:drinkOrderId(\d+)" element={isLoggedIn ? <LatteForm /> : <Navigate to="/login" />} />
        <Route path="/delete/:orderId" element={isLoggedIn ? <DrinkOrderDelete /> : <Navigate to="/login" />}/>
          
      </Routes>
    </main>
  );
};
