import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ShowOnScreen from 'react-on-screen';

import UI from '../../components/ui';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import {getProjectDetails} from '../../actions/projectDetails';
import HomePageBlocks from  '../../components/homePageBlocks';

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
          <section id='individual-projects'>
            <Navigation />
            <section className='individual-projects container'>
              <h4>{this.state.pd.name}</h4>
              <Row className='individual-projects-about container'>
                <Col xs={12} md={6} className='about-container'>
                    <p>{this.state.pd.description}</p>
                    <h5> Technologies used </h5>
                    <ul>
                      {this._displayTechnologies()}
                    </ul>
                    { this.state.pd.weblink &&
                     <Row>
                      <Col>
                        <UI.Button className='go-next' linkTo={`${this.state.pd.weblink}`} externalLink={true}>
                          {this.props.slug}
                        </UI.Button>
                      </Col>
                    </Row>
                    }
                </Col>
                <Col xs={12} md={6} className='image-container'>
                  {/*}<div className='image-pad' style={{backgroundImage: `url(../images/${this.props.slug}-pad.png)`}} ></div>
                  <div className='image-mobile' style={{backgroundImage: `url(../images/${this.props.slug}-mobile.png)`}} ></div>*/}

                  <img className='image-pad' src={`../images/${this.props.slug}-pad.png`} />
                  <img className='image-mobile' src={`../images/${this.props.slug}-mobile.png`} />
                </Col>
              </Row>

              <Row className='container individual-projects-screenshots '>
                <Col xs={12} className='image-container'>
                  <img className='image-desktop' src={`../images/${this.props.slug}-desktop.png`} />
                </Col>
              </Row>

            </section>
            <ShowOnScreen offset={300}>
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
            </ShowOnScreen>
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
