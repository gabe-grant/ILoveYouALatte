import React, { useContext, useEffect } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import Latte from "./Latte";


export const DrinkOrderList = () => {
  const { drinkorder, getAllDrinkOrders } = useContext(DrinkOrderContext);

  useEffect(() => {
    getAllDrinkOrders();
  }, []);

  return (

        <div>
          {drinkorder.map((drinkorders) => (
            <>
                <Latte key={drinkorders.id} drinkorders={drinkorders} />
            </>
          ))}
        </div>

  );
};

export default DrinkOrderList;
