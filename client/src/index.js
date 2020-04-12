import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from './components/adminPage/AdminPage';
import SignUp from './components/signupPage/SignUp';
import './styles/index.css';
import HomePage from './components/homepage/HomePage';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route path="/" component={SignUp}></Route>
          <Route path="/admin" component={AdminPage}></Route>
        </Switch>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
