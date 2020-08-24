import React from 'react';
import './App.css';
import Nav from './Nav';
import LandingPage from './LandingPage'
import About from './About';
import Projects from './Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {change_css} from './ColorChange';


function App() {



  return (
    <Router >

    <div className="App color1 color3" id="app" onClick={change_css} >
<Nav />
      <Switch>
      
      <Route path="/" exact component={LandingPage}  />
      <Route path="/About" exact component={About} />
      <Route path="/Projects" exact component={Projects} />
      </Switch>



    </div>
    </Router>
    
  );
}






export default App;
