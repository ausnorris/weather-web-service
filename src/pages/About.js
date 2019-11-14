import React from 'react';
import './About.css';


class About extends React.Component {
  render(){
    return(
      <div className="page">
          <div className="heading">About this App</div>
          <div className="info">
            This is a scalable micro services app that can be deployed in both containers and VM's on any platform. Each service can scale independently.
            It uses data from mapbox.com, darksky.net and google maps.
          </div>
          <div className="contributors">
            <div className="person">
              This App was built by Scott Norris 
              <img className="pimg"src={require('../images/small.jpg')} alt="Scott"/>
            </div>
            <div className="person">
              and Sean Huntley 
              <img className="pimg" src={require('../images/sean.jpg')} alt="Sean" />
            </div>
          </div>
      </div>
    )
  }
}

export default About;