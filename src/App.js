import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import Footer from "./MyComponents/Footer";
import Blog from "./MyComponents/Blog";
import Resume from "./MyComponents/Resume";
import Projects from "./MyComponents/Projects";
import React from 'react';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/resume'>
          <Resume/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
      </Switch>

      <Footer/>     
    </>
  );
}

export default App;