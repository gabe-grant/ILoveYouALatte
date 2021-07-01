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

    
    
    return (
        <DrinkOrderContext.Provider value={{
           drinkorder, addDrinkOrder
        }}>
            {props.children}
        </DrinkOrderContext.Provider>
    )
}