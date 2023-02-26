import React, { useContext, useEffect } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import Latte from "./Latte";

import './DrinkOrderList.css';

export const DrinkOrderList = () => {
  
  const { drinkorders, getAllDrinkOrders } = useContext(DrinkOrderContext);

  useEffect(() => {
    getAllDrinkOrders()
  });

  return (
        <div id='drink-order-list'>
          {drinkorders.map((order) => (
            <ul key={order.id}>
              <Latte order={order} />
            </ul>
          ))}
        </div>
  );
};

export default DrinkOrderList;
