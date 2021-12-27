const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

/*
app.use((req, res, next) => {
   if (req.method === 'GET') {
        res.send('GET requests are disabled')
   } else {
        next()
   }
})

app.use((req, res, next) => {
        res.status(503).send('Site is currently down. Check back soon!')
})
*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})

/* Using Bcrypt tp hash password
const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedpassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedpassword)

    const isMatch = await bcrypt.compare('Red12345!', hashedpassword)
    console.log(isMatch)
}


// JWT
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
        expiresIn: '7 days'
    })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()


const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    return {}
}

console.log(JSON.stringify(pet))
*/

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // We have taken a task and found the user
    // const task = await Task.findById('608f8dafbc30585f74ca1d5a')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // Take user and find their task
    const user = await User.findById('608f8cb71b041520984e6ded')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()