import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Components
import Home from "./Components/Home.js"
import Login from "./Components/Login.js"

//Styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
