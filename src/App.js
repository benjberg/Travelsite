import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js'
import Products from './components/pages/Products.js'
import SignUp from './components/pages/SignUp.js'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
