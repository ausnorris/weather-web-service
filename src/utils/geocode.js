const request = require('request')

const host = process.env.WEATHER_GEOCODE_LB_SERVICE_HOST || "localhost"
const port = process.env.WEATHER_GEOCODE_LB_SERVICE_PORT || 3001

const geocode = (address, callback) =>{
    
    const url = 'http://' + host + ":" + port +"/api?address=" + address
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibnVnZ2V0Z3RyIiwiYSI6ImNqeXI1ZHl2ZzA3azgzbXRrMzNycTRoMDQifQ.R-6_qyli6hGBQN3ECWzE_g&limit=1'
    console.log(url)
    request({url, json: true}, (error, { body}) => {
        if (error) {
            callback('unable to connect to location services!', undefined)
        } else {
            console.log(body)
            callback(undefined, {
                latitude: body.latitude,
                longitude: body.longitude,
                location: body.location

            })
        }
    })
}

module.exports = geocode
