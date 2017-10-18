import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProjectDetails} from '../../actions';
import Parallax from 'react-springy-parallax';

import UI from '../../components/ui';
import Header from '../../components/header';

class IndividualProject extends Component {

  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <section id='individual-projects' className='text-center'>

        <Header heading={this.props.slug}/>

        <section className='image-wrapper'>
          <div className='image-container'>
            <img className='image-desktop' src='images/vicpolice-desktop.png' />
            <img className='image-mobile' src='images/vicpolice-mobile.png' />
            <img className='image-pad' src='images/vicpolice-pad.png' />
          </div>
        </section>

        <Row className='individual-project-description'>
          <Col>
            <h4> Technologies used </h4>
            <ul>
              <li>HTML</li>
              <li>Bootstrap 3 & scss</li>
              <li>Jquery</li>
              <li>Drupal CMS</li>
              <li>PHP</li>
              <li>Gulp</li>
              <li>Amazon EC2</li>
            </ul>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <UI.Button className='go-next' linkTo="/projects">
            Visit site
          </UI.Button>
        </Row>

      </section>
    )
  }
}

/**
 * This will retrieve the state which will be available as props
 * as this.props.newText in the component
 * @param  {array} state array retrieved from reducer
 * @return {Object}      Object retrived from new state
 */
const matchStateToProps = state => ({newProject: state.newProject});


/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch =>
    bindActionCreators({getProjectDetails}, dispatch);


// Bind actions, states and component to the store
export default connect(matchStateToProps, matchDispatchToProps)(IndividualProject);
