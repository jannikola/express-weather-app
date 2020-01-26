const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Sarajevo'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})