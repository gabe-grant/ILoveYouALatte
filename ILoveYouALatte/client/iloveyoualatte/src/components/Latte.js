import React from "react";
import Login from "./Login";
// import { Link } from "react-router-dom";

const Latte = ({ drinkorders }) => {
  
  const customerId = JSON.parse(sessionStorage.getItem("customer")).id
  
  return ( 
    <section>
        <div>
          {drinkorders.custId === customerId ? (
            <>
              <p>{drinkorders.drinkSize}</p>
              <p>{drinkorders.hotOrIced}</p>
              <p>{drinkorders.milkChoice}</p>
              <p>{drinkorders.milkFoam}</p>
              <p>{drinkorders.drinkSyrup}</p>
              <p>{drinkorders.drinkSweetner}</p>
              <p>{drinkorders.espressoShots}</p>
              <p>{drinkorders.toppings}</p>
            </>
          ) : (
           <Login />
          )}  
        </div>
    </section>
  );
};

export default Latte;
