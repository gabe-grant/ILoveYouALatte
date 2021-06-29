import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import Login from "./Login";


export default function ApplicationViews() {
  const { isLoggedIn } = useContext(CustomerContext);

  return (
    <main>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        
      </Switch>
    </main>
  );
};
