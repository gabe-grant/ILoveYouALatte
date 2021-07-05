import React, { useContext, useEffect } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";
import Latte from "./Latte";
//import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

export const DrinkOrderList = () => {
  const { drinkorder, getAllDrinkOrders} = useContext(DrinkOrderContext);

  useEffect(() => {
    getAllDrinkOrders();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {drinkorder.map((drinkorders) => (
            <>
                <Latte key={drinkorders.id} drinkorders={drinkorders} />
                {/* <Link to={`/posts/${do.id}`}>Post Details</Link> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkOrderList;
