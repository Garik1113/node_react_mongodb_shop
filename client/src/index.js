import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./components/adminPage/AdminPage";
import "./styles/index.css";
import HomePage from "./components/homepage/HomePage";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route path="/" component={AdminPage}></Route>
        </Switch>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
