import React, { useState, useEffect, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const CustomerContext = createContext();

export function CustomerProvider(props) {
  const apiUrl = "/api/cusotmer";

  const cusotmer = sessionStorage.getItem("cusotmer");
  const [isLoggedIn, setIsLoggedIn] = useState(cusotmer != null);

  const [isFirebaseReady, setIsFirebaseReady] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      setIsFirebaseReady(true);
    });
  }, []);

  const login = (email, pw) => {
    return firebase.auth().signInWithEmailAndPassword(email, pw)
      .then((signInResponse) => getCustomer(signInResponse.user.uid))
      .then((customer) => {
        sessionStorage.setItem("customer", JSON.stringify(customer));
        setIsLoggedIn(true);
      });
  };

  const logout = () => {
    return firebase.auth().signOut()
      .then(() => {
        sessionStorage.clear()
        setIsLoggedIn(false);
      });
  };


  // Might need to change some things in this function
  const register = (customer, password) => {
    return firebase.auth().createUserWithEmailAndPassword(customer.email, password)
      .then((createResponse) => saveUser({ ...customer, firebaseUserId: createResponse.user.uid }))
      .then((savedCustomer) => {
        sessionStorage.setItem("customer", JSON.stringify(savedCustomer))
        setIsLoggedIn(true);
      });
  };

  const getToken = () => firebase.auth().currentUser.getIdToken();

  const getCustomer = (firebaseUserId) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/${firebaseUserId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json()));
  };

  const saveUser = (customer) => {
    return getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
      }).then(resp => resp.json()));
  };

  return (
    <CustomerContext.Provider value={{ isLoggedIn, login, logout, register, getToken }}>
        if (isFirebaseReady){
            props.children}
    </CustomerContext.Provider>
  );
}