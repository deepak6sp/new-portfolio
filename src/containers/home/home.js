import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
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

            <Row className='justify-content-center profile-name'>
              Deepak Prakash
            </Row>
            <Row className='justify-content-center profile-desc'>
              UX Designer & Full Stack Developer
            </Row>
            <UI.Button className='go-next' linkTo="/projects">
              View projects
            </UI.Button>
            <Footer />
          </main>
        );
    }
}

export default Home
