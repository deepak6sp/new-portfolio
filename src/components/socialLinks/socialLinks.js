import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const SocialLinks = () => (
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
);

export default SocialLinks
