import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CustomerContext } from "../providers/CustomerProvider";
import Login from "./Login";
// import Register from "./Register";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(CustomerContext);

  return (
    <main>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/register">
          <Register />
        </Route> */}
      </Switch>
    </main>
  );
};
