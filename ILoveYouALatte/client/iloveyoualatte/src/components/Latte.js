import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Login from "./Login";
// import { Link } from "react-router-dom";

const Latte = ({ order }) => {
  
  const customerId = JSON.parse(sessionStorage.getItem("customer")).id;
  const history = useHistory();
  
  
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
              <p>{order.DrinkSweetner}</p>
              <p>{order.espressoShots}</p>
              <p>{order.toppings}</p>
              <button onClick={() => {
                history.push(`/delete/${order.id}`)
              }}>Delete Order</button>
              <button onClick={() => {
                history.push(`/edit/${order.id}`)
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
