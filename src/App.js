import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <switch>
      <Route path="/" exact component={home} />
      <Route path="/About" exact component={About} />
      <Route path="/Projects" exact component={Projects} />
      </switch>
      
    </div>
    </Router>
  );
}


const home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
