import React, {Component} from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import navIcon from './images/nav-icon.svg';

class Navigation extends Component {

    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };
    }

    _toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    _closeNav() {
      document.querySelector('.navbar-collapse').classList.remove('show');
      this.setState({
        collapsed: true
      });
    }

    render() {
        return (
            <Navbar>
              <NavbarBrand href="/">dp</NavbarBrand>
              <NavLink href="http://www.webhyphen.com/">Blog</NavLink>
              <NavbarToggler onClick={this._toggleNavbar.bind(this)} className="mr-2">
                <img src={navIcon}/>
              </NavbarToggler>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <div className='nav-link' onClick={this._closeNav.bind(this)} >
                    x
                  </div>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/projects">Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        );
    }
}

export default Navigation
