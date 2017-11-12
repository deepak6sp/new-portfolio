import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { lazyload } from 'react-lazyload';

import UI from '../ui';

lazyload({
  height: 200,
  once: true,
  offset: 100
})

const HomePageBlocks = (props) => (
          <Row>
            <Col className={`home-page-blocks ${props.className}`}>
              <FontAwesome name={props.icon} size='2x'/>
              {/*}*/}
              <article className='container'>
                <h4> {props.heading}</h4>
                {props.children}
                { !props.hideButton &&
                  <UI.Button className='go-next' linkTo={props.linkTo} externalLink={props.externalLink}>
                    {props.buttonText}
                  </UI.Button>
                }
              </article>
            </Col>
          </Row>
        );

export default HomePageBlocks
