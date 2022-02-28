import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import "./App.css";
import UserProvider from "./Context/UserContext";
export default function App() {
  return (
    <div className="app">
      <UserProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </UserProvider>
    </div>
  );
}
