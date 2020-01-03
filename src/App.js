import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function MainApp() {
  return (
    <div className="MainApp">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <div>Home</div>;
          }}
        />
        <Route
          exact
          path="/shop"
          render={() => {
            return <div>Shop</div>;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return <div>Login</div>;
          }}
        />
      </Switch>
    </div>
  );
}

export default MainApp;
