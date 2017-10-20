import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Navigation from '../components/navigation';
import Home from '../containers/home';
import Projects from '../containers/projects';
import IndividualProject from '../containers/individualProject';
import Contact from '../containers/contact';


const Router = () =>
    <HashRouter>
       <switch id='portfolio'>
            <Navigation />
            <Route exact path="/" component={ () => <Home/> }/>
            <Route path="/projects" component={ProjectsRouter}/>
       </switch>
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
