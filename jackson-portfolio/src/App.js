import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/gallery';
import About from './components/about';
import Contact from './components/contact';
import CustomNavbar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <CustomNavbar />        
          <Route exact path="/" component={Gallery}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
