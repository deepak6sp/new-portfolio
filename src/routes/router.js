import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/home';
import Projects from '../containers/projects';
import Contact from '../containers/contact';
import Navigation from '../components/navigation';


const Router = () =>
    <BrowserRouter>
       <div id='portfolio'>
            <Navigation />
            <Route exact path="/" component={ () => <Home/> }/>
            <Route path="/projects" component={Project}/>
       </div>
    </BrowserRouter>;

const Project = ({ match }) => (
  <div>
    ID: {match.url}
    <Route path={`{match.url}/:projectName`} component={ <div>asdsad</div> }/>
    <Route exact path={match.url} component={ () => <Projects/> }/>
  </div>
)


const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)


export default Router;
