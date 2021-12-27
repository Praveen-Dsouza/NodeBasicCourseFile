// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Praveen.')
// fs.appendFileSync('notes.txt', ' I live in Mumbai.')

//*****************************
// const add = require('./utils.js')

// const sum = add(4, -2)
// console.log(sum)

// const validator = require('validator')
// const getNotes = require('./notes')

// const msg = getNotes()
// console.log(msg)
// // console.log(validator.isEmail('praveendsouza@example.com'))
// console.log(validator.isURL('https://google.com'))

// ****************************** 
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// const greenMsg = chalk.blue.inverse.bold('Success!')
// console.log(greenMsg)

// const command = process.argv[2] 

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// console.log(process.argv)

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})  

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// add, remove, read, list

yargs.parse()