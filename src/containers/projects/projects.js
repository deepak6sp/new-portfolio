import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import UI from '../../components/ui';

import {getProjects} from '../../actions/projects';

import LazyLoad from 'react-lazyload';
import HorizontalScroll from 'react-scroll-horizontal'

import Navigation from '../../components/navigation';
import Header from '../../components/header';
import HomePageBlocks from  '../../components/homePageBlocks';


class Projects extends Component {

    constructor(props) {
      super(props);
      this.state = {
        projects_list: ''
      }
    }

    componentWillMount() {
      this.props.actions.getProjects();
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ projects_list: nextProps.allProjects });
    }


    _handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      let parent = e.target;
      let href = e.target.getAttribute('data-href');

      parent.classList.add('fadeOutDown');

      return setTimeout( () => {
        window.location.hash = `projects/${href}`
      } , 500 );
    }

    _displayProjectsList() {
        let list = this.props.allProjects;
        if(!list) {
          list = this.state.projects_list;
        }
        return Object.entries(list).map(([key, value]) =>
              <Col xs={12} md={4} className='image-container' key={key}>
                <div className='overlay-image'>
                  <img src={`images/${key}-desktop.png`} />
                  <div className='overlay'></div>
                  <UI.Button
                    className='go-next'
                    linkTo={`/projects/${key}`}
                    dataHref = {key}
                    onClick={this._handleClick.bind(this)}>
                       view more
                  </UI.Button>
                </div>
                <div className='image-tag-container' >
                  <h6>{value.name}</h6>
                </div>
              </Col>
        );
    };

    _scrollDown() {
      document.querySelector('.contact-details').scrollIntoView({
        behavior: 'smooth'
      });
    }


    render() {
        return (
            <section id='projects'>
              <Navigation />
              <section className='project-container container'>
                <Row>
                  {this._displayProjectsList()}
                </Row>
              </section>

              <HomePageBlocks
                className = 'inverse-2'
                icon='user-circle-o'
                heading = 'About'
                buttonText = 'know me'
                linkTo = '/about'>
                  <p>I am a Full Stack Web Developer having 5 years of experience. Recently, I have
                  been focusing on UX prototyping and front end development. I have designed this website using
                  sketch app and developed using Bootstrap 4, Reactjs and Node (Expressjs).</p>
              </HomePageBlocks>
            </section>
        );
    }
}

/**
 * This will retrieve the state which will be available as props
 * as this.props.newText in the component
 * @param  {array} state array retrieved from reducer
 * @return {Object}      Object retrived from new state
 */
const matchStateToProps = state => ({allProjects: state.projectDetails});

/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({getProjects}, dispatch)
  };
}


// Bind actions, states and component to the store
export default connect(matchStateToProps, matchDispatchToProps)(Projects)
