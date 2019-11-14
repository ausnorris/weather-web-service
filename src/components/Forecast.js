import React from 'react';
import './Forecast.css'

import Map from './Map'



class Forecast extends React.Component {
    
    
    render(){
        
        return (
            <div className="results">
                <div className="heading">
                    {this.props.location}
                </div>
                <div className="coords">
                    <i>Latitude:{this.props.latitude}, Longitude:{this.props.longitude}</i>
                </div>
                <div className="forecast">
                    {this.props.forecast}
                </div>
                <Map center={{
                    lat:this.props.latitude,
                    lng:this.props.longitude
                }}/>
                
            </div> 
        );
    }
}
export default Forecast;