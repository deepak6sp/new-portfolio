import React, {Component} from 'react';
import Header from '../../components/header';

class Projects extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <section className='projects container'>
              <Header
                heading='Projects'
                caption='I worked on'/>

                <article>
                  <div className='project1'>
                    <h2 className='project-title'>
                      <span>Project1</span>
                    </h2>
                    <div className='project-block'>
                      <img src='http://lorempixel.com/400/200' />
                      <p className='desc'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <div className='project1'>
                    <h2 className='project-title'>
                      <span>Project1</span>
                    </h2>
                    <div className='project-block'>
                      <img />
                      <p className='desc'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <div className='project1'>
                    <h2 className='project-title'>
                      <span>Project1</span>
                    </h2>
                    <div className='project-block'>
                      <img />
                      <p className='desc'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </article>
            </section>
        );
    }
}

export default Projects
