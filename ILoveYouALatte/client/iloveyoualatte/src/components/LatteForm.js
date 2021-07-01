import React, { useContext, useEffect, useState } from "react"
import { DrinkOrderContext } from "../providers/DrinkOrderProvider"
import "./LatteForm.css"
import { useHistory, useParams } from 'react-router-dom';

export const LatteForm = () => {
    const { addDrinkOrder } = useContext(DrinkOrderContext)

    const [latte, setLatte] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    const {plantId} = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {

      const newLatte = { ...latte }
      newLatte[event.target.name] = event.target.value
      setLatte(newLatte)
    }

    const handleSubmitDrinkOrder = () => {
      
      //in the case, a plant in the array we are updating || adding it to the strigified database
      if (latte.drinkSize === "" || latte.hotOrIced === ""){
          window.alert("Please select a size and hot or iced!")
      } else {
        //disable the button - no extra clicks to fuck shit up
        setIsLoading(true);
        addDrinkOrder({
              DrinkSize: latte.drinkSize, 
              HotOrIced: latte.hotOrIced,
              MilkChoice: latte.milkChoice,
              MilkFoam: latte.milkFoam,
              DrinkSyrup: latte.drinkSyrup,
              DrinkSweetner: latte.drinkSweetner,
              EspressoShots: latte.espressoShots,
              Toppings: latte.toppings
          })
          //pushes a new entry onto the history stack
          .then(() => history.push("/"))
        }
      }
    

    // useEffect(() => {
    //     if (plantId){
    //       getPlantById(plantId)
    //       .then(plant => {
    //           setPlants(plant)
    //           setIsLoading(false)
    //       })
    //     } else {
    //       setIsLoading(false)
    //     }
    
    // }, [])


    return (
     
      <section>
        <h2 className="drink-order-title">New Drink Order</h2>
        <form className="drink-form">
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSize">What size?: </label>
              <select id="drinkSize" name="DrinkSize" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="hotOrIced">Hot or iced?</label>
              <select id="hotOrIced" name="HotOrIced" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="milkChoice">Choice of milk: </label>
              <select id="milkChoice" name="MilkChoice" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="milkFoam">Milk foam: </label>
              <select id="milkFoam" name="MilkFoam" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSyrup">Any syrup?: </label>
              <select id="drinkSyrup" name="DrinkSyrup" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSweetner">Any sweetner?: </label>
              <select id="drinkSweetner" name="DrinkSweetner" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="espressoShots">Add espressso shots?: </label>
              <select id="espressoShots" name="EspressoShots" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="toppings">Top it off: </label>
              <select id="toppings" name="Toppings" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>

            </div>
          </fieldset>
          <button className="drink-order-btn"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSubmitDrinkOrder()
            }}>
          {addDrinkOrder}</button>
        </form>
      </section>
      
    )
}