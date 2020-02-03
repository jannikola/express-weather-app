const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Nikola Jankovic'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Nikola Jankovic'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help pls',
        title: 'Help',
        name: 'Nikola Jankovic'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide address'
        })
    }

    res.send({
        forecast: 'It is raining',
        location: 'Sarajevo',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide search term'
        })
    }

    console.log(req.query)
    res.send({
        products: [],
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'error page for help only',
        name: 'Nikola Jankovic'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'error message',
        name: 'Nikola Jankovic'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})