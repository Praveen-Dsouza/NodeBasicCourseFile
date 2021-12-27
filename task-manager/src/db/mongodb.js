/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID*/

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    /* CREATE
    // C
    db.collection('users').insertOne({
        name: 'Vivian',
        age: 24
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user!')
        }

        console.log(result.ops) // print array of docs
    })
    
    
    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        }, {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert user!')
        }

        console.log(result.ops) // print array of docs
    })
    

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops) // print array of docs
    })
    
    // READ
    db.collection('users').findOne({ _id: new ObjectID('608690a5a510404b38895b50') }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
    

    db.collection('users').find({ age: 23 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 23 }).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({ _id : new ObjectID("60868d2752ea85304cdd8950") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })
    

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
   

    // UPDATE

    db.collection('users').updateOne({
        _id: new ObjectID("60868a93f0e2a12c1422cd9f")
    }, {
        // $set: {
        //     name: 'Sagar'
        // }
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    

    db.collection('tasks').updateMany({
        completed : false
    },{
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
    

    // DELETE
    db.collection('users').deleteMany({
        age: 24
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    */

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})