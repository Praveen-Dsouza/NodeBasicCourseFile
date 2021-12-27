const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = 3000

// app.use((req, res, next) => {
//    if (req.method === 'GET') {
//         res.send('GET requests are disabled!')
//    } else {
//        next()
//    }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site Under Maintanance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('6027eb52e9c23c0aac2c701c')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('6027e8d60f25b31e64695b2e')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()

/*
const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    console.log(this)
    return this
}
 
console.log(JSON.stringify(pet))


const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // const password = 'Red12345!'
    // const hashedPassword = await bcrypt.hash(password, 8)

    // console.log(password)
    // console.log(hashedPassword)

    // const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    // console.log(isMatch)

    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()
*/