import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import HomePageBlocks from '../homePageBlocks';
import FontAwesome from 'react-fontawesome';


const Contact = () => (
    <Row className='contact-details'>
      <Col>
          <HomePageBlocks
            className = 'inverse-2 get-in-touch'
            icon='address-book-o'
            heading = 'Get in touch'
            text = 'If you like my work and have some cool project to talk about, you could reach
    me at,'
            hideButton = {true}
            />
          <Row>
            <Col sm={12} className='email'>
              <article className='container'>
                <FontAwesome name='envelope-open-o' size='lg'/>
                <strong>deepak6sp@gmail.com</strong>
              </article>
            </Col>
            <Col sm={12}  className='phone'>
              <article className='container'>
                <FontAwesome name='phone' size='lg'/>
                <strong>0422596332</strong>
              </article>
            </Col>
          </Row>
      </Col>
    </Row>
);

export default Contact
