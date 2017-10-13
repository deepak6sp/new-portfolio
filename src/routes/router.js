import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from '../containers/home';
import Projects from '../containers/projects';
import Navigation from '../components/navigation';


const Router = () =>
    <HashRouter>
       <div id='portfolio'>
          <Navigation />
          <Route exact path="/" component={ () => <Home/> }/>
          <Route path="/projects" component={ () => <Projects/> }/>
       </div>
    </HashRouter>;

export default Router;
