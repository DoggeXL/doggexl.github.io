import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Projects from '../../Containers/Projects'
import Nav from '../../Containers/Nav'
import Aboutme from '../../Containers/Aboutme'
import {BrowserRouter as Router, Route} from 'react-router-dom';



class App extends Component {


  render() {
     const currentPath = window.location.pathname
    return (
      <div className="App">
      <Nav/>
      <div>
     <Router>
     <div>
    <Route exact  path="/" component={Projects} />
    <Route path="/Aboutme" component={Aboutme}  />
    </div>
  </Router>
 </div>

      </div>
    );
  }
}



export default App;
