import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import Login from "./Login";
import { DrinkCard } from "./DrinkCard";
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
          <LatteForm />
        </Route>
      </Switch>
    </main>
  );
};
