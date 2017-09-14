import React, {Component} from 'react';

class Contact extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className='contact container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='wrapper'>
                    <div className='heading p-5'>Contact</div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Contact
