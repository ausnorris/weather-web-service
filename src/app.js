const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//Setup Handlebars engine and view location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res)=> {
    res.render('index', {
        title: "Weather App",
        name: 'Scott Norris'
    })
})
app.get('/weather', (req, res) =>{
    if (!req.query.address) {    
        return res.send({
            error: "You must provide an address"
        })

    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return res.send({
                error: error
            })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: error
                })
            }
            console.log(latitude + " " + longitude)
            res.send({
                location : location,
                forecast: forecastData,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {    
        return res.send({
            error: "You must provide a seach term"
        })

    }

    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Scott Norris'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Helping',
        name: 'Scott Norris',
        message: "What help do you need?"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        message: "Help article not found",
        name: 'Scott Norris'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        message: "404 Page not found",
        name: 'Scott Norris'
    })
})

app.listen(port, () => {
    console.log('server started on port ' + port)
})