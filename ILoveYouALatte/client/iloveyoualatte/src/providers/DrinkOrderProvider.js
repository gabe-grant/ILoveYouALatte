import React, { useState, useContext, createContext } from "react"
import { CustomerContext } from "./CustomerProvider"


export const DrinkOrderContext = createContext()

export const DrinkOrderProvider = (props) => {

    const [drinkorders, setDrinkOrders] = useState([])
    const { getToken } = useContext(CustomerContext);


    const addDrinkOrder = (drinkorder) => {
        return getToken().then((token) => 
          fetch("/api/drinkorder", {
           method: "POST",
           headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
           },
           body: JSON.stringify(drinkorder),
         })
        )};

    const getAllDrinkOrders = () => {
        return getToken().then((token) =>  
          fetch("/api/drinkorder", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(res => res.json())
          .then(setDrinkOrders));
    }

    const getDrinkOrder = (id) => {
      return getToken().then((token) => 
        fetch(`/api/drinkorder/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => res.json()))
    }

    const updateDrinkOrder = (drinkorder) => {
      return getToken().then((token) =>
        fetch(`/api/drinkorder/${drinkorder.Id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
            body: JSON.stringify(drinkorder),
        })
          .then(getAllDrinkOrders))};

    const deleteDrinkOrder = orderId => {
      return getToken().then((token) =>
        fetch(`/api/drinkorder/${orderId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }))
    }
    

    return (
        <DrinkOrderContext.Provider value={{
           drinkorders, addDrinkOrder, getAllDrinkOrders, getDrinkOrder, updateDrinkOrder, deleteDrinkOrder
        }}>
            {props.children}
        </DrinkOrderContext.Provider>
    )
}