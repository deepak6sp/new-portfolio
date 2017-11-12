import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';

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
                    <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={0}>

                      <p style={{color:'red'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={-300}>

                      <p style={{color:'green'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={-300}>

                      <p style={{color:'green'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                      knowledge and expericence focusing on modern design trends and latest web
                      development technologies.</p>
                    </LazyLoad>
                    <LazyLoad height={200} offset={-300}>

                        <p style={{color:'green'}} >  I have been writing articles @webhyphen. I am doing this blog to share my
                        knowledge and expericence focusing on modern design trends and latest web
                        development technologies.</p>
                      </LazyLoad>


                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Contact
