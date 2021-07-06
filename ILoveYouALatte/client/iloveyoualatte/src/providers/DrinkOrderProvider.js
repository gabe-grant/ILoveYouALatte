import React, { useState, useContext, createContext } from "react"
import { CustomerContext } from "./CustomerProvider"



export const DrinkOrderContext = createContext()

export const DrinkOrderProvider = (props) => {

    const [drinkorder, setDrinkOrder] = useState([])
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

    const getAllDrinkOrders = () =>
        getToken().then((token) =>  
          fetch("/api/drinkorder", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(res => res.json())
          .then(setDrinkOrder));

    const getDrinkOrder = (id) => {
      return getToken().then((token) => 
        fetch(`/api/drinkorder/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => res.json()))
    }

    
    
    return (
        <DrinkOrderContext.Provider value={{
           drinkorder, addDrinkOrder, getAllDrinkOrders, getDrinkOrder
        }}>
            {props.children}
        </DrinkOrderContext.Provider>
    )
}