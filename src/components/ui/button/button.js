import React from 'react';
import {Link} from 'react-router-dom';

export const StandardButton = props => {
  return (
    <button>
    {
      !props.externalLink && <Link
      type={props.type}
      id={props.id}
      className="button"
      to={props.linkTo}
      target={props.target}
      onClick = {props.onClick}
      data-href = {props.dataHref}>
        {props.children}
        <span className={`${props.className}`}></span>
      </Link>
    }
    {
      props.externalLink &&
      <a
        className='button'
        target = '_blank'
        href={props.linkTo}>
        {props.children}
        <span className='fa-external-link'></span>
      </a>

    }
    </button>
  );
}

//
