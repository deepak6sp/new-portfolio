import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import HomePageBlocks from '../homePageBlocks';
import FontAwesome from 'react-fontawesome';
import SocialLinks from '../../components/socialLinks';
import ShowOnScreen from 'react-on-screen';


const Contact = () => (
    <Row className='contact-details'>
      <Col>
        <ShowOnScreen offset={50}>
          <HomePageBlocks
            className = 'inverse-2 get-in-touch'
            icon='address-book-o'
            heading = 'Get in touch'
            hideButton = {true}>
              <p>If you like my work and have some cool project to talk about, you could reach me at,</p>
          </HomePageBlocks>
          <Row>
            <Col className='email'>
              <article className='container'>
                <FontAwesome name='envelope-open-o' size='lg'/>
                <strong>deepak6sp@gmail.com</strong>
              </article>
            </Col>
          </Row>
          <Row>
            <Col className='phone'>
              <article className='container'>
                <FontAwesome name='map-marker' size='lg'/>
                <strong> Melbourne, Australia</strong>
              </article>
            </Col>
          </Row>
          {/*}Row>
            <Col className='phone'>
              <article className='container'>
                <FontAwesome name='phone' size='lg'/>
                <strong>0422596332</strong>
              </article>
            </Col>
          </Row>*/}
          <Row>
            <Col>
              <SocialLinks />
            </Col>
          </Row>
        </ShowOnScreen>
      </Col>
    </Row>
);

export default Contact
