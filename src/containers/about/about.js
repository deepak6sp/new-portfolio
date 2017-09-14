import React, {Component} from 'react';

class About extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className='about container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='wrapper'>
                    <div className='heading p-5'>About Me</div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default About
