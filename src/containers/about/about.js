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
                        <h3> Things I do </h3>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                      <article className='about-things-block'>
                        <FontAwesome name="empire" size='3x'/>
                        <h6> Prototyping </h6>
                        <p> I use my favourite <strong>Sketch App</strong> for prototyping and wireframes,
                            and convert them to complete web solutions.</p>
                      </article>
                    </Col>
                    <Col sm={12} md={4}>
                      <article className='about-things-block'>
                        <FontAwesome name="code" size='3x'/>
                        <h6> Development </h6>
                        <p> I develop custom made user friendly web pages and applications using latest open source technologies. I use build tools such as
                        npm, bower, webpack, gulp, sass to speed up developement process.</p>
                      </article>
                    </Col>
                    <Col sm={12} md={4}>
                      <article className='about-things-block'>
                        <FontAwesome name="tablet" size='3x'/>
                        <FontAwesome name="desktop" size='3x'/>
                        <FontAwesome name="mobile" size='3x'/>
                        <h6> Testing </h6>
                        <p> I consider testing to be as important as design and development, so I believe in test driven development. Also, I will make sure the
                            whole application works accross multi browsers and devices.</p>
                      </article>
                    </Col>
                </Row>

            </section>

            <section className="container about-my-blog">
                <Row>
                    <Col sm={12}>
                        <h3> My blog</h3>
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

            <section className="container testimonals">
                <Row>
                    <Col sm={12}>
                        <h3> What people are saying</h3>
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
