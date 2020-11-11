import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {reducer} from "./Util/reducer";
//Components
import Home from "./Components/Home.js"
import Login from "./Components/Login.js"

//Styles
import './App.css';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
} 
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App">
        <Router>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
