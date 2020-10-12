import React from 'react';
import './App.css';
import Nav from './Nav';
import LandingPage from './LandingPage'
import About from './About';
import Projects from './Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AnimatedCursor from './CustomCursor'

function App() {



  return (
    
    <Router >
    <AnimatedCursor className="color3" />
    <div className="App color1 color3" id="app"  >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<Nav />
      <Switch>
      
      <Route path="/Basic-Website-To-React" exact component={LandingPage}  />

      <Route path="/About" exact component={About} />
      <Route path="/Projects" exact component={Projects} />
      </Switch>


 
    </div>
    </Router>
    
  );
}






export default App;
