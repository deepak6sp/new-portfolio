import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Parallax from 'react-springy-parallax';
import LazyLoad from 'react-lazyload';

import Header from '../../components/header';



class Projects extends Component {

    constructor(props) {
      super(props);
    }

    _handleClick(e) {
      e.preventDefault();

      let parent = e.target;
      let href = e.target.getAttribute('href');

      let child1 = parent.children[0].children[0];
      let child2 = parent.children[0].children[1];
      child1.classList.add('fadeOutDown');
      child2.classList.add('fadeOutDown');

      return setTimeout( function(){window.location.href = href } , 1000 );
    }

    render() {
        return (
            <section id='projects' className='container'>
              <Header
                heading='Projects'
                caption='I worked on'/>

                <LazyLoad offset={-200} height={400}>
                  <Link className='projects' to='/projects/vicpolice' onClick={this._handleClick.bind(this)}>
                    <Row className='d-flex align-items-center project-container'>
                      <Col sm='6' className='project-description fadeInLeft'>
                        <h2 className='project-title'>
                          <span>Vic Police</span>
                        </h2>
                        <div className='project-text'>
                          <p>Read the latest and breaking news from Victoria Police</p>
                        </div>
                      </Col>
                      <Col sm='6' className='project-image fadeInRight'>
                          <img src='images/vicpolice-desktop.png' />
                      </Col>
                    </Row>
                  </Link>
                </LazyLoad>

                <LazyLoad offset={-200} height={400}>
                  <Link className='projects' to='/projects/1'  onClick={this._handleClick.bind(this)}>
                    <Row className='d-flex align-items-center project-container'>
                      <Col sm='6' className='project-description'>
                        <h2 className='project-title'>
                          <span>Vic Police</span>
                        </h2>
                        <div className='project-text'>
                          <p>Read the latest and breaking news from Victoria Police</p>
                        </div>
                      </Col>
                      <Col sm='6' className='project-image'>
                          <img src='images/vicpolice.png' />
                      </Col>
                    </Row>
                  </Link>
                </LazyLoad>

                <LazyLoad offset={-200} height={400}>
                  <Link className='projects' to='/projects/1'>
                    <Row className='d-flex align-items-center project-container'>
                      <Col sm='6' className='project-description'>
                        <h2 className='project-title'>
                          <span>Vic Police</span>
                        </h2>
                        <div className='project-text'>
                          <p>Read the latest and breaking news from Victoria Police</p>
                        </div>
                      </Col>
                      <Col sm='6' className='project-image'>
                          <img src='images/vicpolice.png' />
                      </Col>
                    </Row>
                  </Link>
                </LazyLoad>
            </section>
        );
    }
}

export default Projects
