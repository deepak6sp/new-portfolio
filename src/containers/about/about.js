import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import Navigation from '../../components/navigation';
import UI from '../../components/ui';

class About extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <main id='about'>
            <Navigation />
            <section className="container container-fluid  about-me">
                <Row>
                    <Col sm={12}>
                        <h3> About me</h3>
                        <hr/>
                        <p> I am a Full Stack Web Developer having 5 years of experience. Recently, I have been focusing on UX and front end development.
                            I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. My coding follows reusable
                            component based structure for easy maintenance, scaling and debugging. I also, have experince using PHP and Node frameworks.
                        </p>
                    </Col>
                </Row>
            </section>
            <section className="container container-fluid about-my-blog">
                <Row>
                    <Col sm={12}>
                        <h3> About my blog</h3>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <p> I have been writing articles at <span>webhyphen</span>.
                          I am doing this blog to share knowledge that focuses mainly
                          on latest web technologies involving Javascript and Node.
                          However, I would not hesitateto include tips and tricks
                          about UX/UI, front end, back end and Devops technology.</p>
                    </Col>
                </Row>
                <a className='button go-next'
                  href="http://www.webhyphen.com"
                  target='_blank'>
                    Visit Blog
                </a>
            </section>
            <section className="container container-fluid about-me">
                <Row>
                    <Col sm={12}>
                        <h3> About things I do </h3>
                        <hr/>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        {/*<FontAwesome className='super-crazy-colors' name="mobile" size='3x'/>*/}
                        <h6> Design and Wireframes </h6>
                        <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                           been using my favourite <strong>Sketch App</strong> for mockups and wireframes, and loving it.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        {/*<FontAwesome className='super-crazy-colors' name="code" size='2x'/>*/}
                        <h6> Development </h6>
                        <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as
                        npm, bower, webpack, gulp, sass to speed up developement process.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        {/*<FontAwesome className='super-crazy-colors' name="cogs" size='2x'/>*/}
                        <h6> Testing </h6>
                        <p> I consider testing to be as important as design and development, so I believe in Agile test driven development. Also, I will make sure the
                            web application works fine accross multi browsers and devices.</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <p> My projects involve use of technologies such as:</p>
                        <section className="skillsModulesVisible">
                            {/*<ListSkills/>*/}
                        </section>
                        <p>I am self learner, love web technologies, have passion for what I do, and hope to do this forever.</p>
                        {/*<UI.Button>Download Resume</UI.Button>*/}
                    </Col>
                </Row>
            </section>



          </main>

        );
    }
}

export default About
