import React, { useContext, useEffect, useState } from "react"
import { DrinkOrderContext } from "../providers/DrinkOrderProvider"
import "./LatteForm.css"
import { useHistory, useParams } from 'react-router-dom';


export const LatteForm = () => {
    const { addDrinkOrder, getDrinkOrder, updateDrinkOrder } = useContext(DrinkOrderContext)

    const [latte, setLatte] = useState({
      DrinkSize: "",
      HotOrIced: "",
      MilkChoice: "",
      MilkFoam: "",
      DrinkSyrup: "",
      DrinkSweetner: "",
      EspressoShots: "",
      Toppings: "",
      CustId: ""
    })

    const [isLoading, setIsLoading] = useState(true);
    const {drinkOrderId} = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {

      const newLatte = { ...latte }
      newLatte[event.target.name] = event.target.value
      setLatte(newLatte)
    }


    const customerId = JSON.parse(sessionStorage.getItem("customer")).id

    const handleSubmitDrinkOrder = () => {
      
      if (latte.DrinkSize === "" || latte.HotOrIced === ""){
          window.alert("Please select a size and hot or iced!")
      } else {
        //disable the button - no extra clicks to fuck shit up
        setIsLoading(true);
        if (drinkOrderId){
          //"PUT" method from the context provider -UPDATE
          updateDrinkOrder({
                Id: latte.id,
                DrinkSize: latte.drinkSize, 
                HotOrIced: latte.hotOrIced,
                MilkChoice: latte.milkChoice,
                MilkFoam: latte.milkFoam,
                DrinkSyrup: latte.drinkSyrup,
                DrinkSweetner: latte.drinkSweetner,
                EspressoShots: latte.espressoShots,
                Toppings: latte.toppings,
                CustId: +customerId
          })
          //pushes a new entry onto the history stack
          .then(() => history.push(`/history`))
        } else {
          addDrinkOrder({
                DrinkSize: latte.drinkSize, 
                HotOrIced: latte.hotOrIced,
                MilkChoice: latte.milkChoice,
                MilkFoam: latte.milkFoam,
                DrinkSyrup: latte.drinkSyrup,
                DrinkSweetner: latte.drinkSweetner,
                EspressoShots: latte.espressoShots,
                Toppings: latte.toppings,
                CustId: +customerId
            })
            //pushes a new entry onto the history stack
            .then(() => history.push("/"))
          }
        }
      } 

    useEffect(() => {
      if (drinkOrderId){
        getDrinkOrder(drinkOrderId)
        .then(latte => {
            setLatte(latte)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
      }, [])


    return (
     
      <section>
        <h2 className="drink-order-title">New Drink Order</h2>
        <form className="drink-form">
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="drinkSize">What size?: </label>
              <select id="drinkSize" name="drinkSize" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.drinkSize}>
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
              <select id="hotOrIced" name="hotOrIced" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.hotOrIced}>
                <option>Select one...</option>
                <option>Hot</option>
                <option>Iced</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="drink-from-group">
              <label htmlFor="milkChoice">Choice of milk: </label>
              <select id="milkChoice" name="milkChoice" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.milkChoice}>
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
              <select id="milkFoam" name="milkFoam" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.milkFoam}>
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
              <select id="drinkSyrup" name="drinkSyrup" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.drinkSyrup}>
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
              <select id="drinkSweetner" name="drinkSweetner" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.drinkSweetner}>
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
              <select id="espressoShots" name="espressoShots" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.espressoShots}>
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
              <select id="toppings" name="toppings" required className="drink-form-control"
              onChange={handleControlledInputChange}
              value={latte.toppings}>
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
            }}>
              {drinkOrderId ? <>Update Order</> : <>Order Here</>}</button>
        </form>
      </section>
      
    )
}