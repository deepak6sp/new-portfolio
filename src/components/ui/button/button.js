import React from 'react';
import {Link} from 'react-router-dom';

export const StandardButton = props =>
    <button
      type={props.type}
      id={props.id}
      className="button">
      <Link to={props.linkTo}>
        {props.children}
        <span className={`${props.className}`}></span>
      </Link>
    </button>;
