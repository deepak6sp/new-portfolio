import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitText} from '../../actions/signForm';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import UI from '../../components/ui';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div className='home'>
            <div className='row justify-content-center profile-name'>
              Deepak Prakash
            </div>
            <div className='row justify-content-center profile-desc'>
              UX Designer & Full Stack Developer
            </div>
          </div>
        );
    }
}

export default Home
