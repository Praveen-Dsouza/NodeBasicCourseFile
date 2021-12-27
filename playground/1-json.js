const fs = require('fs')
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)

console.log(bookJSON)

const parsedData  = JSON.parse(bookJSON) //Takes JSON data and parse into object
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)


const dataBuffer = fs.readFileSync('1-json.json') //We get the binary data
const dataJSON = dataBuffer.toString() //We convert binary data into string
const data = JSON.parse(dataJSON) //We then parse it as object
console.log(data.title)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
