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
                        <p> I am Full Stack Web Developer having 5 years of experience. Recently, I have been mainly focusing on UX and front end development.
                            I develop with skills of minimal usability designs and using core XHTML/HTML, CSS and Javascript. My coding follows reusable
                            component based structure for easy maintenance, scaling and debugging. Have experince using PHP and Node frameworks.
                        </p>
                    </Col>
                </Row>
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
                        <h4> Design and Wireframes </h4>
                        <p> I use photoshop for designs and convert them to complete web solution. Recently, I have
                           been using my favourite <strong>Sketch App</strong> for mockups and wireframes, and loving it.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        {/*<FontAwesome className='super-crazy-colors' name="code" size='2x'/>*/}
                        <h4> Development </h4>
                        <p> I develop custom made user friendly web pages and applications using the latest open source technologies. I use build tools such as
                        npm, bower, webpack, gulp, sass to speed up developement process.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        {/*<FontAwesome className='super-crazy-colors' name="cogs" size='2x'/>*/}
                        <h4> Testing </h4>
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


            <section className="container container-fluid about-my-blog">
                <Row>
                    <Col sm={12}>
                        <h3> About my blog</h3>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <p> My website is developed on MERN(Mongo, Express, Redux (React), Node) stack. I have also used react-bootstrap, which is my
                            favourite front end framework, and react way of animations.</p>
                        <p> I am doing this blog to share knowledge that focuses mainly on latest web technologies involving Javascript and Node. However, I would not hesitate
                            to include tips and tricks about UX/UI, front end and back end technologies </p>
                    </Col>
                </Row>
                <a
                  className='button go-next'
                  href="http://www.webhyphen.com"
                  target='_blank'>
                    Visit Blog
                </a>
            </section>
          </main>

        );
    }
}

export default About
