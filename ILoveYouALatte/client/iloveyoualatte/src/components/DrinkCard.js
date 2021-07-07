import React from "react"
import "./DrinkCard.css"
import { Link } from "react-router-dom"
import picture_of_a_latte from "../assets/images/picture_of_a_latte.jpg"
import picture_of_cold_brew from "../assets/images/picture_of_cold_brew.jpg"
import picture_of_a_frappe from "../assets/images/picture_of_a_frappe.jpg"

export const DrinkCard = () => {


  
  return (
    <div className="drink-boxes">
      <Link className="drink-link" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/latte">
        <section className="drink-box">
          <div className="drink-info">
            <h3 className="drink-title">Latte</h3>
            <p>$4.99</p>
            <p>A latte is a creamy combination of espresso and steamed milk. You can get it iced or customize how you want!</p>
          </div>
          <img alt="a latte" src={picture_of_a_latte} width="100%" height="100%" />
        </section>
      </Link>
      <Link className="drink-link" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/latte">
        <section className="drink-box">
          <div className="drink-info">
            <h3 className="drink-title">Cold Brew</h3>
            <p>$3.99</p>
            <p>Cold Brew is steaped, like tea, for 20 hours and then iced. Add milk, cream, and non-dairies or your favorite syrup!</p>
          </div>
          <img alt="a latte" src={picture_of_cold_brew} width="100%" height="100%" />
        </section>
      </Link>
      <Link className="drink-link" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/latte">
        <section className="drink-box">
          <div className="drink-info">
            <h3 className="drink-title">Frappe</h3>
            <p>$5.49</p>
            <p>A Frappe, not Frappuccino, is a frozen blended beverage that is sure to delight your taste buds!</p>
          </div>
          <img alt="a latte" src={picture_of_a_frappe} width="100%" height="100%" />
        </section>
      </Link>
    </div>
  )
}