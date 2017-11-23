import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import navIcon from './images/nav-icon.svg';


class Navigation extends Component {

    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      var bodyRect = document.body.getBoundingClientRect();
      window.addEventListener('scroll', function(e) {
        let elemRect = document.querySelector('#main').getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        if (offset < -100) {
          document.querySelector('.navbar').classList.add('reduce-height');
        } else {
          document.querySelector('.navbar').classList.remove('reduce-height');
        }
      });
    }

    componentDidUnMount() {
      console.log('navbar un mounted');
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
            <Navbar className='fixed-top'>
              <NavbarBrand href="/">
                <div className='avatar'></div>
              </NavbarBrand>
              <a target="_blank" href="http://www.webhyphen.com" className="nav-link blog-link">
                <FontAwesome name='external-link'/> Blog
              </a>
              {/*<NavLink href="http://www.webhyphen.com/">Blog</NavLink>*/}
              <NavbarToggler onClick={this._toggleNavbar.bind(this)} className="mr-5">
                <FontAwesome name='none' size='3x' className='align-right-icon'/>
              </NavbarToggler>

              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar >
                  <div className='nav-link' onClick={this._closeNav.bind(this)} >
                    x
                  </div>
                  <NavItem>
                    <Link to="/" className="nav-link" onClick={this._closeNav.bind(this)}>Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/projects" className="nav-link" onClick={this._closeNav.bind(this)}>Projects</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about" className="nav-link" onClick={this._closeNav.bind(this)}>About</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        );
    }
}

export default Navigation
