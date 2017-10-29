import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import navIcon from './images/nav-icon.svg';


class Navigation extends Component {

    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };
    }

    componentDidMount() {
      var bodyRect = document.body.getBoundingClientRect();
      window.addEventListener('scroll', function(e) {
        let elemRect = document.querySelector('.profile').getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        console.log(offset);
        if (offset < 0) {
          document.querySelector('.navbar').classList.add('reduce-height');
        } else {
          document.querySelector('.navbar').classList.remove('reduce-height');
        }
      });
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
              <NavbarBrand href="#/">
                <img src='images/avatar.png'/>
              </NavbarBrand>
              {/*<NavLink href="http://www.webhyphen.com/">Blog</NavLink>*/}
              <NavbarToggler onFocus={this._toggleNavbar.bind(this)} className="mr-2">
                <img src={navIcon}/>
              </NavbarToggler>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className='fadeInLeft'>
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
                  <NavItem>
                    <Link to="/contact" className="nav-link" onClick={this._closeNav.bind(this)}>Contact</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        );
    }
}

export default Navigation
