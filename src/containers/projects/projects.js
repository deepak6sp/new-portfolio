import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getProjects} from '../../actions/projects';

import LazyLoad from 'react-lazyload';
import HorizontalScroll from 'react-scroll-horizontal'

import Navigation from '../../components/navigation';
import Header from '../../components/header';

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

      let parent = e.target;
      let href = e.target.getAttribute('href');

      let child1 = parent.children[0].children[0];
      let child2 = parent.children[0].children[1];
      child1.classList.add('fadeOutDown');
      child2.classList.add('fadeOutDown');


      return setTimeout( function(){window.location.hash = href } , 500 );
    }

    _displayProjectsList() {
        let list = this.props.allProjects;
        if(!list) {
          list = this.state.projects_list;
        }
        return Object.entries(list).map(([key, value]) => {

          return (

                <Link key={key} className='projects orange-lightest' to={`/projects/${key}`} onClick={this._handleClick.bind(this)}>
                  <Row className='d-flex align-items-center project-container'>
                    <Col sm='6' className='project-description fadeInLeft'>
                      <h2 className='project-title'>
                        <span>{key}</span>
                      </h2>
                      <div className='project-text'>
                        <h5>{value.description}</h5>
                      </div>
                    </Col>
                    <Col sm='6' className='project-image fadeInRight'>
                        <img src={`images/${key}-desktop.png`} />
                    </Col>
                  </Row>
                </Link>
          );
        });
    };

    render() {
        return (
            <section id='projects'>
              <Navigation />
              <HorizontalScroll reverseScroll={true}>
                {this._displayProjectsList()}
              </HorizontalScroll>
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
