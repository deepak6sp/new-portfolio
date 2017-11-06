import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UI from '../../components/ui';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import {getProjectDetails} from '../../actions/projectDetails';

class IndividualProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pd : ''
    }
  }

  componentWillMount() {
    this.props.actions.getProjectDetails(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ pd: nextProps.projectDetails });
  }

  _displayTechnologies() {
    if(this.state.pd.technologies != undefined) {
      return this.state.pd.technologies.map( (element, index) => {
        return <li key={index}>{element}</li>
      });
    }
  }

  render() {

        return (
          <section id='individual-projects' className='text-center'>
            <Navigation />
            <section className='individual-projects container'>
              <Row>
                <Col sm={6}>
                    <img className='image-desktop' src={`images/${this.props.slug}-desktop.png`} />
                </Col>
                <Col sm={6}>
                    <h5> Technologies used </h5>
                    <ul>
                      {this._displayTechnologies()}
                    </ul>
                </Col>
              </Row>
            </section>
            {/*}<section className='individual-projects'>
              <section className='header-wrapper'>

                 <div className='image-container'>

                   <img className='image-mobile' src={`images/${this.props.slug}-mobile.png`} />
                   <img className='image-pad' src={`images/${this.props.slug}-pad.png`} />
                 </div>
              </section>
              <section className='individual-project-description'>
                <Header heading={this.state.pd.name}/>
                <Col>
                  <h5> Technologies used </h5>
                  <ul>
                    {this._displayTechnologies()}
                  </ul>
                </Col>
                <Col>
                  <a className='button' target='_blank' href={`${this.state.pd.weblink}`}>
                  Browse site
                  </a>
                </Col>

              </section>
            </section>*/}
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
const matchStateToProps = state => ({ projectDetails : state.projectDetails });

/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch => {
  return {
    actions : bindActionCreators({getProjectDetails}, dispatch)
  }
}


// Bind actions, states and component to the store
export default connect(matchStateToProps, matchDispatchToProps)(IndividualProject);
