import React, {Component} from 'react';

class Divider extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className='divider container'>
              <div className='row justify-content-center '>
                <div className='col-md-8'>
                    <span className='d-flex justify-content-center align-items-center p-5 display-text'>
                      " {this.props.text} "
                    </span>
                </div>
              </div>
            </div>
        );
    }
}

export default Divider
