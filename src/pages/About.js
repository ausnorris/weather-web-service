import React from 'react';



class About extends React.Component {
  render(){
    return(
      <div className="page">
          <div className="heading">About this App</div>
          <div className="info">
          This app was built by Scott Norris and Sean Huntley. 
          It used data from mapbox.com, darksky.net and google maps.
          </div>

      </div>
    )
  }
}

export default About;