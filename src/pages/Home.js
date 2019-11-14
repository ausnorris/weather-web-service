import React from 'react';

import {TextField} from '@material-ui/core';

import './Home.css'
import Forecast from '../components/Forecast';

const forecastHost = process.env.REACT_APP_WEATHER_FORECAST_LB_SERVICE_HOST || "localhost"
const forecastPort = process.env.REACT_APP_WEATHER_FORECAST_LB_SERVICE_PORT || 3002
const geocodeHost = process.env.REACT_APP_WEATHER_GEOCODE_LB_SERVICE_HOST || "localhost"
const geocodePort = process.env.REACT_APP_WEATHER_GEOCODE_LB_SERVICE_PORT || 3001
console.log("this is forcast host: " + forecastHost)
console.log("this is geocode host: " + geocodeHost)

class Home extends React.Component {
    constructor(props){
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

        var start_text ='';
        if(this.props.match.params.loc){
            start_text = this.props.match.params.loc
        }
        this.state ={
            text: start_text,
            submitted: 0,
            apiError: 0,
            latitude: null,
            longitude: null,
            location: '',
            forecast:''

        }
    }
    handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e){
        if(e){
            e.preventDefault();
        }

        //fetch('http://127.0.0.1:3001/api?address='+this.state.text)
        fetch('http://'+geocodeHost+':'+geocodePort+'/api?address='+this.state.text)
        .then(res=> res.json())
        .then(
            (result) => {
                console.log(result);
                //fetch('http://127.0.0.1:3002/api?latitude='+result.latitude+'&longitude='+result.longitude+ '&location='+result.location)
                fetch('http://'+forecastHost+':'+forecastPort+'/api?latitude='+result.latitude+'&longitude='+result.longitude+ '&location='+result.location)
                .then(res=> res.json())
                .then((result) => {
                    console.log(result);
                    this.setState({
                        location: result.location,
                        forecast: result.forecast,
                        submitted: 1
                    })
                }).catch(()=> {console.log("Couldn't fetch");});
                this.setState({
                    latitude: result.latitude,
                    longitude: result.longitude
                })
            }
        ).catch(()=> {
            console.log("Couldn't fetch");
            this.setState({
                apiError: 1
            })
        })
    }



    componentDidMount(){
        if(this.props.match.params.loc){
            this.handleSubmit();
        }
    }

    render(){
        
        return(
        <div className="page">
            <div className="heading">
                Welcome to Weather 36 API Service!
            </div>
            <form onSubmit={(e)=> this.handleSubmit(e)}className="form">
                <TextField 
                id="loc" 
                label="Location name" 
                placeholder={this.state.submitted?"Try another one":"What's the weather like in ... ?"}
                className="searchbox"
                margin="normal"
                variant="outlined"
                fullWidth
                value = {this.state.text}
                onChange = {(e) => this.handleTextChange(e)}
                />

            </form>
            {this.state.submitted ? (
                <Forecast 
                    latitude={this.state.latitude} 
                    longitude={this.state.longitude}
                    location = {this.state.location}
                    forecast = {this.state.forecast}
                />
            ): (null)}
            {this.state.apiError ? (
                <div className="center">
                <div className="error">Can't contact other app services. Have you deployed them?</div>
                </div>
            ):(null)}
        </div>
        )
    }
}

export default Home;
