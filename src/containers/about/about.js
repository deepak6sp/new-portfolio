import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import Navigation from '../../components/navigation';
import UI from '../../components/ui';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

class About extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <main id='about'>
            <Navigation />
            <section className="container about-me">
                <Row>
                    <Col sm={12}>
                        <h3> About me</h3>
                        <hr/>
                        <p> I am self learner, passionate Full Stack Web Developer having 5 years of experience. Recently, I have been focusing on UX and front end development.
                            I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. My coding follows reusable
                            component based structure for easy maintenance, scaling and debugging. I also, have experince using PHP and Node frameworks.
                        </p>
                    </Col>
                    <Col sm={12}>
                      <UI.Button className='go-next' linkTo="/images/Deepak_Resume.pdf" externalLink={true}>
                          <FontAwesome name="download" size='lg'/> Resume
                      </UI.Button>
                    </Col>
                </Row>
            </section>

            <section className="container about-things">
                <Row>
                    <Col sm={12}>
                        <h3> About things I do </h3>
                        <hr/>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} className='text-center'>
                        <FontAwesome name="empire" size='3x'/>
                        <h6> Design and Wireframes </h6>
                        <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                           been using my favourite <strong>Sketch App</strong> for mockups and wireframes, and loving it.</p>
                    </Col>
                    <Col sm={12} md={4} className='text-center'>
                        <FontAwesome name="code" size='3x'/>
                        <h6> Development </h6>
                        <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as
                        npm, bower, webpack, gulp, sass to speed up developement process.</p>
                    </Col>
                    <Col sm={12} md={4} className='text-center'>
                        <FontAwesome name="desktop" size='3x'/>
                        <FontAwesome name="mobile" size='3x'/>
                        <h6> Testing </h6>
                        <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the
                            whole application works accross multi browsers and devices.</p>
                    </Col>
                </Row>

            </section>

            <section className="container about-my-blog">
                <Row>
                    <Col sm={12}>
                        <h3> About my blog</h3>
                        <hr/>
                    </Col>
                    <Col sm={12}>
                        <p> I have been writing articles at webhyphen.
                        I am doing this blog to share my knowledge and expericence
                        focusing on modern design trends and latest web development technologies.</p>
                    </Col>
                    <Col sm={12}>
                      <UI.Button className='go-next' linkTo="http://www.webhyphen.com" externalLink={true}>
                          Visit Blog
                      </UI.Button>
                    </Col>
                </Row>
            </section>

            <Contact/>

            <Footer />

          </main>

        );
    }
}

export default About
