import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';

import {getProjects} from '../../actions/projects';

import LazyLoad from 'react-lazyload';
import HorizontalScroll from 'react-scroll-horizontal'

import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

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

              <div className='image-container' key={key}>
                <div className='overlay'></div>
                <div className='project-title' data-href={key} onClick={this._handleClick.bind(this)}>
                  {value.name}
                </div>
                <img src={`images/${key}-desktop.png`} />
              </div>
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
              <div className='project-images'>
                <HorizontalScroll reverseScroll={true}>
                  {this._displayProjectsList()}
                </HorizontalScroll>
                <section className='scroll-down' onClick={this._scrollDown.bind(this)}>
                  <FontAwesome name='angle-double-down' size='3x'/>
                </section>
              </div>

              <Contact />
              <Footer />
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
