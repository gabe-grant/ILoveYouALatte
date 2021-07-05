import React from "react";
// import { Link } from "react-router-dom";

const Latte = ({ drinkorders }) => {
  return (
   
    <section>
        <div>
            <p>{drinkorders.DrinkSize}</p>
            <p>{drinkorders.HotOrIced}</p>
            <p>{drinkorders.MilkChoice}</p>
            <p>{drinkorders.MilkFoam}</p>
            <p>{drinkorders.DrinkSyrup}</p>
            <p>{drinkorders.DrinkSweetner}</p>
            <p>{drinkorders.EspressoShots}</p>
            <p>{drinkorders.Toppings}</p>
        </div>
    </section>
  );
};

export default Latte;
