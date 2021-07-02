import React, { useContext, useEffect, useState } from "react"
import { DrinkOrderContext } from "../providers/DrinkOrderProvider"
import "./LatteForm.css"
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

export const LatteForm = () => {
    const { drinkorder, setDrinkOrder, addDrinkOrder } = useContext(DrinkOrderContext)

    const [latte, setLatte] = useState({
      DrinkSize: "",
      HotOrIced: "",
      MilkChoice: "",
      MilkFoam: "",
      DrinkSyrup: "",
      DrinkSweetner: "",
      EspressoShots: "",
      Toppings: ""
    })

    const [isLoading, setIsLoading] = useState(true);
    
	  const history = useHistory();

    const handleControlledInputChange = (event) => {

      const newLatte = { ...latte }
      newLatte[event.target.name] = event.target.value
      setLatte(newLatte)
    }

    const handleSubmitDrinkOrder = () => {
      
      if (latte.DrinkSize === "" || latte.HotOrIced === ""){
          window.alert("Please select a size and hot or iced!")
      } else {
        //disable the button - no extra clicks to fuck shit up
        setIsLoading(true);
        addDrinkOrder({
              DrinkSize: latte.DrinkSize, 
              HotOrIced: latte.HotOrIced,
              MilkChoice: latte.MilkChoice,
              MilkFoam: latte.MilkFoam,
              DrinkSyrup: latte.DrinkSyrup,
              DrinkSweetner: latte.DrinkSweetner,
              EspressoShots: latte.EspressoShots,
              Toppings: latte.Toppings
          })
          //pushes a new entry onto the history stack
          .then(() => history.push("/"))
        }
      }
    

    useEffect(() => {
        setLatte(latte)
        setIsLoading(false)  
      }, [])


    return (
     
      <section>
        <h2 className="drink-order-title">New Drink Order</h2>
        <form className="drink-form">
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSize">What size?: </label>
              <select id="drinkSize" name="DrinkSize" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select a size...</option>
                <option>12oz</option>
                <option>16oz</option>
                <option>20oz</option>
                </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="hotOrIced">Hot or iced?</label>
              <select id="hotOrIced" name="HotOrIced" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select one...</option>
                <option>Hot</option>
                <option>Iced</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="milkChoice">Choice of milk: </label>
              <select id="milkChoice" name="MilkChoice" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select a milk...</option>
                <option>Whole</option>
                <option>2%</option>
                <option>Breve</option>
                <option>Coconut</option>
                <option>Oat</option>
                <option>Soy</option>
                <option>Almond</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="milkFoam">Milk foam: </label>
              <select id="milkFoam" name="MilkFoam" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Milk foam options...</option>
                <option>No Foam</option>
                <option>Light Foam</option>
                <option>Extra Foam</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSyrup">Any syrup?: </label>
              <select id="drinkSyrup" name="DrinkSyrup" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select a syrup...</option>
                <option>Vanilla</option>
                <option>Caramel</option>
                <option>Hazelnut</option>
                <option>Mocha</option>
                <option>White Chocolate</option>
                <option>Peppermint</option>
                <option>Turkish Delight</option>
                <option>Maple</option>
                <option>Cinnamon</option>
                <option>Lavender</option>
                <option>Irish Cream</option>
                <option>Chai</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSweetner">Any sweetner?: </label>
              <select id="drinkSweetner" name="DrinkSweetner" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select a sweetner...</option>
                <option>Stevia</option>
                <option>Honey</option>
                <option>Raw Sugar</option>
                <option>Sugar</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="espressoShots">Add espressso shots?: </label>
              <select id="espressoShots" name="EspressoShots" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Additional shots...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="toppings">Top it off: </label>
              <select id="toppings" name="Toppings" required className="drink-form-control"
              onChange={handleControlledInputChange}>
                <option>Select a topping...</option>
                <option>Cinnamon Powder</option>
                <option>Chocolate Powder</option>
                <option>Brown Sugar</option>
              </select>

            </div>
          </fieldset>
          <button className="drink-order-btn"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSubmitDrinkOrder()
            }}>{addDrinkOrder}Order here</button>
        </form>
      </section>
      
    )
}