const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});



/*
const me = new User({
    name: '   Mike   ',
    email: 'MYEMAIL@example.com   ',
    password: 'phone098!'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})
*/



// const task = new Task({
//     description: '   Eat lunch'
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })
