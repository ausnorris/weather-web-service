const request = require('request')

const host = process.env.WEATHER_FORECAST_LB_SERVICE_HOST || "localhost"
const port = process.env.WEATHER_FORECAST_LB_SERVICE_PORT || 3002

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://' + host +":" + port +"/api?latitude=" + latitude + '&longitude=' + longitude;
    console.log(url)
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback("Can not connect to weather service",undefined);
        } else if(body.error){
            callback('Unable to find location');
        } else {
            console.log(body.forecast)
            callback(undefined, body.forecast)
            //callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out, with a high of " +body.daily.data[0].temperatureHigh + ", and a low of " + body.daily.data[0].temperatureLow + ". There is a " + body.currently.precipProbability + "% chance of rain. Have a lovely day" )
        }

    })
}

module.exports = forecast