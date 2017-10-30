import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import UI from '../ui';

const HomePageBlocks = (props) => (
            <Col className={`homePageBlocks ${props.className}`}>
              <FontAwesome name={props.icon} size='2x'/>
              {/*}*/}
              <article className='container'>
                <h4> {props.heading}</h4>
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
