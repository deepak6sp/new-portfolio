import React, {Component} from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import navIcon from './images/nav-icon.svg';

class Navigation extends Component {

    constructor(props) {
      super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
        return (
            <Navbar>
              <NavbarBrand href="/">dp</NavbarBrand>
              <NavLink href="http://www.webhyphen.com/">Blog</NavLink>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2">
                <img src={navIcon}/>
              </NavbarToggler>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
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
