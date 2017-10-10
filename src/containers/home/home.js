import React, {Component} from 'react';

import Header from '../../components/header';
import UI from '../../components/ui';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <main className='home'>
            <Header />
            <div className='row justify-content-center profile-name'>
              Deepak Prakash
            </div>
            <div className='row justify-content-center profile-desc'>
              UX Designer & Full Stack Developer
            </div>
            <UI.Button className='go-next'>
              View projects
            </UI.Button>
          </main>
        );
    }
}

export default Home
