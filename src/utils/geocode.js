const request = require('request')

const host = process.env.WEATHER_GEOCODE_LB_SERVICE_HOST || "localhost"
const port = process.env.WEATHER_GEOCODE_LB_SERVICE_PORT || 3001

const geocode = (address, callback) =>{
    
    const url = 'http://' + host + ":" + port +"/api?address=" + address
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
