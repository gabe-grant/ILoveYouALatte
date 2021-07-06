import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Login from "./Login";
// import { Link } from "react-router-dom";

const Latte = ({ drinkorders }) => {
  
  const customerId = JSON.parse(sessionStorage.getItem("customer")).id;
  const history = useHistory();
  const {drinkOrderId} = useParams();
  
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
              <button onClick={() => {
                history.push(`/delete/${drinkorders.id}`)
              }}>Delete Order</button>
              <button onClick={() => {
                history.push(`/edit/${drinkorders.id}`)
              }}>Edit Order</button>
            </>
          ) : (
           <Login />
          )}  
        </div>
    </section>
  );
};

export default Latte;
