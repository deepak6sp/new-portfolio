import React, {Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UI from '../../components/ui';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <main id='home'>

            <div className='row justify-content-center profile-name'>
              Deepak Prakash
            </div>
            <div className='row justify-content-center profile-desc'>
              UX Designer & Full Stack Developer
            </div>
            <UI.Button className='go-next' linkTo="/projects">
              View projects
            </UI.Button>
            <Footer />
          </main>
        );
    }
}

export default Home
