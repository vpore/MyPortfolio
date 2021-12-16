import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
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