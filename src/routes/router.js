import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';


import Home from '../containers/home';
import Projects from '../containers/projects';
import IndividualProject from '../containers/individualProject';
import About from '../containers/about';
import Contact from '../containers/contact';


const Router = () =>
    <HashRouter>
       <div id='portfolio'>

            <Route exact path="/" component={ () => <Home/> }/>
            <Route path="/projects" component={ProjectsRouter}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
       </div>
    </HashRouter>;

const ProjectsRouter = ({ match }) => (
  <switch>
    <Route exact path={match.url} component={ () => <Projects/> }/>
    <Route path={`${match.url}/:projectName`} component={ IndividualProjectRouter }/>
  </switch>
)

const IndividualProjectRouter = ({ match }) =>
  <IndividualProject slug={match.params.projectName}/>

export default Router;
