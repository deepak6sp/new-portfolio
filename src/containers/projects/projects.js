import React, {Component} from 'react';

class Projects extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className='projects container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='wrapper'>
                    <div className='heading p-5'>Projects</div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Projects
