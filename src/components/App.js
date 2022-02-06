import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import Navbar from "./Navbar/Navbar";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Navbar>
          <Switch>
          <Route path="/Home" components={Home} />
            <Route path="/About" components={About} />
            <Route path="/Doctors" components={Doctors} />
            <Route path="/Login" components={Login} />
            <Route path="/Sign" components={Sign} />
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}
export default App;