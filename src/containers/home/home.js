import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UI from '../../components/ui';
import HomePageBlocks from  '../../components/homePageBlocks'
import {getProjects} from '../../actions/projects';

class Home extends Component {

    constructor(props) {
      super(props);
    }

    _handleClick() {
      this.props.actions.getProjects();
    }

    render() {
        return (
          <main id='home'>
            <Navigation />
            <section className='profile'>
              <div className='overlay'></div>
              <Row className='justify-content-center profile-name'>
                HI, I'M Deepak Prakash
              </Row>
              <Row className='justify-content-center profile-desc'>
                <h6> UX Designer & Full Stack Developer </h6>
              </Row>
              <Row className='justify-content-center profile-location'>
                <p> Based in Melbourne </p>
              </Row>
            </section>
            <Row>
              <HomePageBlocks
                className = 'default'
                heading = 'Projects'
                text = 'I am been fotunate enough to work at both service industries and agencies. While
                        working on various projects, I have picked up UX, Front end, Back end and Devops
                        skills. '
                buttonText = 'showcase'
                linkTo = '/projects'/>
            </Row>

            <Row>
              <HomePageBlocks
                className = 'inverse'
                heading = 'Blog'
                text = 'I have been writing articles at webhyphen. I am doing this blog to share my
                        knowledge and expericence focusing on modern design trends and latest web
                        development technologies.'
                buttonText = 'visit blog'
                externalLink = {true}
                linkTo = 'http://www.webhyphen.com'/>
            </Row>

            <Row>
              <HomePageBlocks
                className = 'default'
                heading = 'About'
                text = 'I am a Full Stack Web Developer having 5 years of experience. Recently, I have
                        been focusing on UX and front end development. I develop with skills of
                        minimal usability designs and using core XHTML/HTML,CSS and Javascript.'
                buttonText = 'know more'
                linkTo = '/about'/>
            </Row>

            <Row>
              <HomePageBlocks
                className = 'inverse-2'
                heading = 'Get in touch'
                text = 'If you like my work and have some cool project to talk about, you could reach
me at,'
                hideButton = {true}
                />
            </Row>

            <section className='contact-details'>
              <article className='container'>
                <Row>
                  <Col sm={5} className='text-left'>
                      <p><strong>deepak6sp@gmail.com</strong></p>
                  </Col>
                  <Col sm={2} className='text-center'>
                      <p>or</p>
                  </Col>
                  <Col sm={5} className='text-center'>
                      <p><strong>0422596332</strong></p>
                  </Col>
                </Row>
              </article>
            </section>

            <Footer />
          </main>
        );
    }
}


const matchDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({getProjects}, dispatch)
  };
}


// Bind actions, states and component to the store
export default connect(null, matchDispatchToProps)(Home)
