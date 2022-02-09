import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
//import Blog from "./pages/Blog";
//import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetail from './pages/ProjectDetail';
import NotFound from "./components/NotFound"
import React from 'react';

function App() {
  return (
    <>
      <Header/>
      
      <Switch>
        <Route exact path='/'>
          <Redirect to='/MyPortfolio'/>
        </Route>
        <Route exact path='/MyPortfolio'>
          <Home/>
        </Route>
        <Route exact path='/MyPortfolio/projects'>
          <Projects/>
        </Route>
        <Route exact path='/MyPortfolio/projects/:projectName'>
          <ProjectDetail/>
        </Route>
        <Route exact path='*'>
          <NotFound/>
        </Route>
      </Switch>

      <Footer/>     
    </>
  );
}

export default App;