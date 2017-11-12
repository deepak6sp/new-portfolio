import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';



import Navigation from '../../components/navigation';
import SocialLinks from '../../components/socialLinks';
import Header from '../../components/header';
import Contact from '../../components/contact';
import UI from '../../components/ui';
import HomePageBlocks from  '../../components/homePageBlocks';
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
            <section className='profile text-center'>
              <div className='overlay'></div>
              <Row className='justify-content-center profile-name'>
                <span>HI, I'M </span> Deepak Prakash
              </Row>
              <Row className='justify-content-center profile-desc'>
                <h6> UX <span>&</span> Full Stack Developer </h6>
              </Row>
              <SocialLinks/>
            </section>
            <section className='home-page-body container'>
                <HomePageBlocks
                  className = 'default'
                  icon = 'codepen'
                  heading = 'Projects'
                  buttonText = 'showcase'
                  linkTo = '/projects'>
                    <p>I am been fotunate enough to work at both service industries and agencies. While
                    working on various projects, I have picked up UX, Front end, Back end and Devops
                    skills.</p>
                </HomePageBlocks>
                <HomePageBlocks
                  className = 'inverse'
                  icon = 'pencil'
                  heading = 'Blog'
                  buttonText = 'visit blog'
                  externalLink = {true}
                  linkTo = 'http://www.webhyphen.com'>
                    <p>I have been writing articles @webhyphen. I am doing this blog to share my
                    knowledge and expericence focusing on modern design trends and latest web
                    development technologies.</p>
                </HomePageBlocks>
                <HomePageBlocks
                  className = 'default'
                  icon='user-circle-o'
                  heading = 'About'
                  buttonText = 'know me'
                  linkTo = '/about'>
                    <p>I am a Full Stack Web Developer having 5 years of experience. Recently, I have
                    been focusing on UX prototyping and front end development.</p>
                    <p>I have designed this website using <strong>sketch app</strong> and developed using Bootstrap 4,
                    Reactjs and Node (Expressjs).</p>
                  </HomePageBlocks>

                  <Contact />

            </section>

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
