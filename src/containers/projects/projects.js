import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getProjectDetails} from '../../actions/projectDetails';

import Parallax from 'react-springy-parallax';
import LazyLoad from 'react-lazyload';
import HorizontalScroll from 'react-scroll-horizontal'

import Header from '../../components/header';



class Projects extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.getProjectDetails('vicpolice');
    }

    _handleClick(e) {
      e.preventDefault();

      let parent = e.target;
      let href = e.target.getAttribute('href');

      let child1 = parent.children[0].children[0];
      let child2 = parent.children[0].children[1];
      child1.classList.add('fadeOutDown');
      child2.classList.add('fadeOutDown');


      return setTimeout( function(){window.location.href = href } , 500 );
    }

    render() {
        return (
            <section id='projects'>
              <HorizontalScroll reverseScroll={true}>

              {/*<Header
                heading='Projects'
                caption='I worked on'/>*/}

                  <Link className='projects black' to='/projects/vicpolice' onClick={this._handleClick.bind(this)}>
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
                {/*  <LazyLoad offset={-200} height={400}>
                  </LazyLoad> */}
                  <div id='move-to'></div>
                  <Link className='projects brown' to='/projects/1'  onClick={this._handleClick.bind(this)}>
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

                  <Link className='projects red' to='/projects/1'>
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
                </HorizontalScroll>
            </section>
        );
    }
}

/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch =>
    bindActionCreators({getProjectDetails}, dispatch);

// Bind actions, states and component to the store
export default connect(null, matchDispatchToProps)(Projects)
