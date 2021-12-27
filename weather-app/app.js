// console.log('Starting')

// setTimeout(() => {
//     console.log('2 Second Timer')
// },2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping')

/* ********************************************* */

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=c92797e3935bb58a0662f0b6e88c45db'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily[0].weather[0].description + 
//             '. There is currently ' + response.body.current.temp + 
//             ' degrees out. There is a ' + response.body.current.uvi + '% chance of rain.')
//     }
// })

// Geocoding
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoicHJhdmVlbmRzb3V6YSIsImEiOiJja2hleTU0NTkwYjQ0MnNtdnQzdTh3eWk5In0.IdCKf7qkgYQ3hAY4ZIUsaA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0] 
//         console.log(latitude, longitude)
//     }
// })

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }
      
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    
}

// console.log(process.argv)


