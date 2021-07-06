import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import Login from "./Login";
import { DrinkCard } from "./DrinkCard";
import { DrinkOrderList } from './DrinkOrderList'
import { LatteForm } from './LatteForm'


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(CustomerContext);

  return (
    <main>
      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <DrinkCard />
        </Route>

        <Route exact path="/latte">
          {isLoggedIn ? <LatteForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/list" exact>
          {isLoggedIn ? <DrinkOrderList /> : <Redirect to="/login" />}
        </Route>

      </Switch>
    </main>
  );
};
