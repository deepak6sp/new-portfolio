import React from 'react';

export const StandardButton = props =>
    <button
      type={props.type}
      id={props.id}
      className="button">
      {props.children}
      <span className={`${props.className}`}></span>
    </button>;
