import React, {Component} from 'react';

const Header = (props) => (
      <header className='header container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h3 className='heading'>{props.heading}</h3>
            <p className='caption'>{props.caption}</p>
          </div>
        </div>
      </header>
);

export default Header
