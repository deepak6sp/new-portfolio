import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from '../containers/home';
import Projects from '../containers/projects';
import IndividualProject from '../containers/individualProject';
import About from '../containers/about';
import Footer from '../components/footer';


const Router = () =>
    <Switch>
       <div id='portfolio'>
            <Route exact path="/" component={ () => <Home/> }/>
            <Route exact path="/projects" component={ () => <Projects/> }/>
            <Route path="/projects/:projectName" component={ ({match}) => <IndividualProject slug={match.params.projectName}/> }/>
            <Route path="/about" component={About}/>
            <Footer />
       </div>
    </Switch>;

export default Router;
