import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import HomePage from "./components/homepage/HomePage";
import AdminPage from "./components/adminPage/AdminPage";
import SignUp from "./components/signupPage/SignUp";
import Login from "./components/login/Login";
import ProductPage from "./components/productPage/ProductPage";
import Products from "./components/products/Products";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/admin" exact component={AdminPage}></Route>
        </Switch>
      </Route>
      <Route path="/users/create" exact component={SignUp} />
      <Route path="/users/login" exact component={Login} />
      <Route path="/products/getPage/:id" exact component={ProductPage} />
      <Route path="/products/getByCatName/:name" component={Products} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
