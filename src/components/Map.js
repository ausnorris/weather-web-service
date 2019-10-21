import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import GPCKEY from '../key'
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GPCKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.center}
          zoom={this.props.zoom}
        />
      </div>
    );
  }
}
 
export default Map;