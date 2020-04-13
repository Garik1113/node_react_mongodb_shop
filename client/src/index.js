import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import HomePage from './components/homepage/HomePage';
import AdminPage from './components/adminPage/AdminPage';
import SignUp from './components/signupPage/SignUp';
import Login from './components/login/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/admin" component={AdminPage}></Route>
        </Switch>
      </Route>
      <Route path="/users/create" component={SignUp} />
      <Route path="/users/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
