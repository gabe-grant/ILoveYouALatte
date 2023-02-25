import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
// import { Link } from "react-router-dom";

const Latte = ({ order }) => {
  
  const customerId = JSON.parse(sessionStorage.getItem("customer")).id;
  const navigate = useNavigate();
  
  return ( 
    <section>
        <div>
          {order.custId === customerId ? (
            <>
              <p>{order.drinkSize}</p>
              <p>{order.hotOrIced}</p>
              <p>{order.milkChoice}</p>
              <p>{order.milkFoam}</p>
              <p>{order.drinkSyrup}</p>
              <p>{order.sweetener}</p>
              <p>{order.espressoShots}</p>
              <p>{order.toppings}</p>
              <button onClick={() => {
                navigate(`/delete/${order.id}`)
              }}>Delete Order</button>
              <button onClick={() => {
                navigate(`/edit/${order.id}`)
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
