import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


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
              <Row className='justify-content-center social-icons'>
                <a target='_blank' href='https://github.com/deepak6sp'>
                  <FontAwesome name='github'/>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/deepak-prakash-a1bb2825/'>
                  <FontAwesome name='linkedin'/>
                </a>
                <a target='_blank' href='https://www.behance.net/deepak6sp'>
                  <FontAwesome name='behance'/>
                </a>
                <a target='_blank' href='https://stackoverflow.com/users/3713726/deepak-prakash'>
                  <FontAwesome name='stack-overflow'/>
                </a>
              </Row>
            </section>
            <Row>
              <HomePageBlocks
                className = 'default'
                icon = 'codepen'
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
                icon = 'pencil'
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
                icon='user-circle-o'
                heading = 'About'
                text = 'I am a Full Stack Web Developer having 5 years of experience. Recently, I have
                        been focusing on UX and front end development. I have designed this website using
                        sketch app and developed using Bootrap 4, Reactjs and Node (Expressjs) frameworks.'
                buttonText = 'know more'
                linkTo = '/about'/>
            </Row>

            <Row>
              <HomePageBlocks
                className = 'inverse-2 get-in-touch'
                icon='address-book-o'
                heading = 'Get in touch'
                text = 'If you like my work and have some cool project to talk about, you could reach
me at,'
                hideButton = {true}
                />
            </Row>

            <section className='contact-details'>
              <article className='container'>
                <Row>
                  <Col className='text-left'>
                      <FontAwesome name='envelope-open-o' size='1x'/>
                      <strong>deepak6sp@gmail.com</strong>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-left'>
                      <FontAwesome name='phone' size='1x'/>
                      <strong>0422596332</strong>
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
