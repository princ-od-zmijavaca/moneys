import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./components/Navbar";
import SettingsPage from "./pages/Settings";
import TransactionsPage from "./pages/Transactions";
import LoginPage from "./pages/Login";

import "./App.css";

function App() {
  var [token, setToken] = useState();

  const tokenString = sessionStorage.getItem("token");
  token = JSON.parse(tokenString);

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/transactions" exact />
              <Route path="/transactions" component={TransactionsPage} />
              <Route path="/settings" component={SettingsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
