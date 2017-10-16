import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProjectDetails} from '../../actions';

import Header from '../../components/header';

class IndividualProject extends Component {

  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <section id='individual-projects' className='container'>
        <Header heading={this.props.slug}/>

        <div className='image-container'>
          <img className='image-mobile' src='images/vicpolice-mobile.png' />
          <img className='image-desktop' src='images/vicpolice-desktop.png' />
          <img className='image-pad' src='images/vicpolice-pad.png' />
        </div>

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
