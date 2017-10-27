import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/header';
import Footer from '../../components/footer';
import UI from '../../components/ui';
import {getProjects} from '../../actions/projects';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    _handleClick() {
      this.props.actions.getProjects();
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
            <UI.Button className='go-next' linkTo="/projects" onClick={this._handleClick.bind(this)}>
              View projects
            </UI.Button>
            <Footer />
          </main>
        );
    }
}


const matchDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({getProjects}, dispatch)
  };
}


// Bind actions, states and component to the store
export default connect(null, matchDispatchToProps)(Home)
