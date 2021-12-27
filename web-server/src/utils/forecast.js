const request = require('request')


const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=c92797e3935bb58a0662f0b6e88c45db'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) //error, data
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                body.daily[0].weather[0].description + 
            '. There is currently ' + body.current.temp + 
            ' degrees out. There is a ' + body.current.uvi + '% chance of rain.'
            
            )
        }
    })
}


module.exports = forecast