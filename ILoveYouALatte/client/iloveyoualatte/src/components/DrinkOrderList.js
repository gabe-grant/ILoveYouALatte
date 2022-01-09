import React, { useContext, useEffect, useState } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import Latte from "./Latte";

import './DrinkOrderList.css';

export const DrinkOrderList = () => {
  const { drinkorders, getAllDrinkOrders } = useContext(DrinkOrderContext);

  useEffect(() => {
    getAllDrinkOrders()
  }, []);

  return (
        <div id='drink-order-list'>
          {drinkorders.map((order) => (
            <>
              <Latte key={order.id} order={order} />
            </>
          ))}
        </div>
  );
};

export default DrinkOrderList;
