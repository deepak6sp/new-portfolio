import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitText} from '../../actions/signForm';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import UI from '../../components/ui';
import profilePic from './images/profile_pic.png';
class Header extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className='header container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <Jumbotron>
                    <Navbar>
                        <Nav className="ml-auto">
                          <NavItem>
                            <NavLink href="https://www.linkedin.com/in/deepak-prakash-a1bb2825">ln-icon</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="https://github.com/deepak6sp">Github</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="http://www.webhyphen.com/">Blog</NavLink>
                          </NavItem>
                        </Nav>
                    </Navbar>
                    <div className='profile-info'>
                      <div className='row justify-content-center profile-image'>
                        <img src={profilePic}/>
                      </div>
                      <div className='row justify-content-center profile-name'>
                        Deepak Prakash
                      </div>
                      <div className='row justify-content-center profile-desc'>
                        UX & Full Stack Developer
                      </div>
                    </div>
                    <Navbar>
                      <Nav className="ml-auto mr-auto">
                        <NavItem>
                          <NavLink href="https://www.linkedin.com/in/deepak-prakash-a1bb2825">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="https://github.com/deepak6sp">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="http://www.webhyphen.com/">Contact</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                  </Jumbotron>
                </div>
              </div>
            </div>
        );
    }
}


/**
 * This will retrieve the state which will be available as props
 * as this.props.newText in the component
 * @param  {array} state array retrieved from reducer
 * @return {Object}      Object retrived from new state
 */
const matchStateToProps = state => ({newText: state.newtext});


/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch =>
    bindActionCreators({submitText}, dispatch);


// Bind actions, states and component to the store
//export default connect(matchStateToProps, matchDispatchToProps)(Header);

export default Header
