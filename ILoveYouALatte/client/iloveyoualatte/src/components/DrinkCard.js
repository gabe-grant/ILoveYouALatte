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
          <p className="drink-title">Latte</p>
          <img alt="a latte" src={picture_of_a_latte} width="100%" height="100%" />
        </section>
      </Link>
      <Link className="drink-link" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/latte">
        <section className="drink-box">
          <p className="drink-title">Cold Brew</p>
          <img alt="a latte" src={picture_of_cold_brew} width="100%" height="100%" />
        </section>
      </Link>
      <Link className="drink-link" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/latte">
        <section className="drink-box">
          <p className="drink-title">Frappe</p>
          <img alt="a latte" src={picture_of_a_frappe} width="100%" height="100%" />
        </section>
      </Link>
    </div>
  )
}