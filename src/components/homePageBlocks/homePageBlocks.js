import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import UI from '../ui';

const HomePageBlocks = (props) => (
          <Row>
            <Col className={`home-page-blocks ${props.className}`}>
              <FontAwesome name={props.icon} size='2x'/>
              {/*}*/}
              {(props.isVisible) ?
              <article className='container show'>
                <h4> {props.heading}</h4>
                {props.children}
                { !props.hideButton &&
                  <UI.Button className='go-next' linkTo={props.linkTo} externalLink={props.externalLink}>
                    {props.buttonText}
                  </UI.Button>
                }
              </article> :
              <article className='container hide'>
                <h4> {props.heading}</h4>
                {props.children}
                { !props.hideButton &&
                  <UI.Button className='go-next' linkTo={props.linkTo} externalLink={props.externalLink}>
                    {props.buttonText}
                  </UI.Button>
                }
              </article>}
            </Col>
          </Row>
        );

export default HomePageBlocks
