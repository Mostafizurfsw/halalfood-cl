import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFood from './components/AddFood/AddFood';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Order from './components/Order/Order';

firebase.initializeApp(firebaseConfig);

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto active">
              <li className="nav-item">
              <Link className="nav-link" to="/"><strong>Halal FooD</strong> </Link>
              </li>
              
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addFood">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          
            </span>
          </div>
        </nav>


        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/addFood">
            <AddFood />
          </PrivateRoute>
          <Route path="/login">
              <Login />
            </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
