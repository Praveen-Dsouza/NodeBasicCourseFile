const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40&lon=-75&appid=c92797e3935bb58a0662f0b6e88c45db'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()