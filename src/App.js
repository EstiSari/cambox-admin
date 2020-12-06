import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from '../Login';
import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import "./App.css";
import fireDb from "./firebase/firebase";
import "./App.css";
//Components
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

export function App() {
  //States
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  //Login function
  const handleLogin = () => {
    clearErrors();
    fireDb
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  // //Signup function
  const handleSignup = () => {
    clearErrors();
    fireDb
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      });
  };

  //Function for logout
  const handleLogout = () => {
    fireDb.auth().signOut();
  };

  //Authentication listener
  const authListener = () => {
    // fireDb.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     clearInputs();
    //     setUser(user);
    //   } else {
    //     setUser("");
    //   }
    // });
  };

  //React listener.
  useEffect(() => {
    authListener();
  }, []);

  console.log("App", setEmail);
  return (
    <div className="App">
      {user ? (
        <Dashboard handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {/*       
      <Dashboard/> */}
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker((props) => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);

// export default App;
