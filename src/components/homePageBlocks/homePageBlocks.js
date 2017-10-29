import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import UI from '../ui';

const HomePageBlocks = (props) => (
            <Col className={`homePageBlocks ${props.className}`}>
              <article className='container'>
                <h4> {props.heading} </h4>
                <p> {props.text} </p>
                { !props.hideButton &&
                  <UI.Button className='go-next' linkTo={props.linkTo} externalLink={props.externalLink}>
                    {props.buttonText}
                  </UI.Button>
                }
              </article>
            </Col>
        );

export default HomePageBlocks
