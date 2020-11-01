import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";

// App.js
export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get(`https://mlty7.sse.codesandbox.io/get-user-data`, {
        withCredentials: true
      })
      .then((res) => {
        const { _id, userName, fullName, email, shopId } = res.data;
        setUserData({ _id, userName, fullName, email, shopId });
        setIsLoggedIn(userName ? true : false);
      })
      .catch((err) => err && console.log("Load Error " + err));
  }, []);
  const handleLogOut = () => {
    axios
      .get(`https://mlty7.sse.codesandbox.io/logout`, {
        withCredentials: true
      })
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((err) => console.log(`Error ${err}`))
      .then(() => window.location.reload());
  };
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          {isLoggedIn ? <Shop userData={userData} /> : <Login />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
      </Switch>
    </div>
  );
};
