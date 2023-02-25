import React, { useContext, useEffect, useState } from "react";
import { DrinkOrderContext } from "../providers/DrinkOrderProvider";

import { useNavigate, useParams } from 'react-router-dom';

import './DrinkOrderDelete.css';

export const DrinkOrderDelete = () => {
  const { deleteDrinkOrder, getDrinkOrder } = useContext(DrinkOrderContext);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const {orderId} = useParams();

  console.log(orderId)
  useEffect(() => {
    getDrinkOrder(orderId).then(setOrder);
  }, [orderId,getDrinkOrder]);

  const handleDelete = () => {
    deleteDrinkOrder(order.id)
      .then(() => {
        navigate("/history")
      })
  }

  return (
    <div id="drink-order-delete">
      <p>Are you sure you want to delete this order?</p>
      <button onClick={handleDelete}>Confirm Delete</button>
      <button onClick={() => {
        navigate("/history")
      }}>Cancel</button>
    </div>
  );
};

export default DrinkOrderDelete;