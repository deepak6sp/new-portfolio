import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../app.js';


const Router = () =>
    <BrowserRouter>
       <div>
           <Route exact path="/" component={ () => <App/> }/>
       </div>
    </BrowserRouter>;

export default Router;
