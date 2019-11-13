import React from 'react';



class About extends React.Component {
  render(){
    return(
      <div className="page">
          <div className="heading">About this App</div>
          <div className="info">
          This is a scalable micro services app that can be deployed in both containers and VM's on any platform. Each service can scale independently.
          It uses data from mapbox.com, darksky.net and google maps.
          App was built by Scott Norris 
          <img src={require('../../public/small.jpg')} />
          
          and Sean Huntley. 
          <img src={require('../../public/sean.jpg')} />
          </div>

      </div>
    )
  }
}

export default About;