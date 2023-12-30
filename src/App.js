import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navegation/Navbar";
import Portafolio from "./components/Portafolio/Portafolio"
import Curriculum from "./components/Curriculum/Curriculum";
import Contactame from "../src/components/Contactame/Contactame";
import GitHistory from "../src/content/introduction-to-git";

import Blog from "./components/Blog/Blog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Portafolio}></Route>
          <Route path="/curriculum" component={Curriculum}></Route>
          <Route path="/contactame" component={Contactame}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/git" component={GitHistory}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
