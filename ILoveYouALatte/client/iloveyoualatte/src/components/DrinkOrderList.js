import React, { useContext, useEffect, useState } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import Latte from "./Latte";


export const DrinkOrderList = () => {
  const { drinkorders, getAllDrinkOrders } = useContext(DrinkOrderContext);

  useEffect(() => {
    getAllDrinkOrders()
  }, []);

  return (
        <div>
          {drinkorders.map((order) => (
            <>
              <Latte key={order.id} order={order} />
            </>
          ))}
        </div>
  );
};

export default DrinkOrderList;
