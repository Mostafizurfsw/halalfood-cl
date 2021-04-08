import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (

        <div className="jumbotron container">
            <h1 className="display-4">Hello, User!</h1>
            <p className="lead">For farther information you must login!</p>
            
            <p className="lead">
            <button onClick={handleGoogleSignIn} className="btn btn-success" type="button">Sign In with Google</button>
            </p>
        </div>
    );
};

export default Login;