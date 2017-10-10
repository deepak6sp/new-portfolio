import React from 'react';

export const StandardButton = props =>
    <a
      type={props.type}
      onClick={props.onClick}
      id={props.id}
      className="button">
      {props.children}
      <span className={`${props.className}`}></span>
    </a>;
