import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import UI from '../../components/ui';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <main className='home'>

            <div className='row justify-content-center profile-name'>
              Deepak Prakash
            </div>
            <div className='row justify-content-center profile-desc'>
              UX Designer & Full Stack Developer
            </div>
            <UI.Button className='go-next'>
              <Link to="/projects">View projects</Link>
            </UI.Button>
            <Footer />
          </main>
        );
    }
}

export default Home
