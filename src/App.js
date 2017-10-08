import React from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './containers/home';
import Divider from './components/divider';
import Projects from './containers/projects';
import About from './containers/about';
import Contact from './containers/contact';

const App = () =>
    <div id='portfolio'>
        <Navigation/>

        <Home/>
        {/*<Divider text='I have over 5 years of experience and still counting…'/>
        <Projects/>
        <Divider text='I am the glue between the user and the code'/>
        <About/>
        <Divider
          text='I am always ready to take on awesome projects.
          If you love what I do, keep in touch'/>
        <Contact/>*/}
        <Footer/>
    </div>;

export default App;
