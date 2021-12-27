require('../src/db/mongoose')
const Task = require('../src/models/task')

/*
Using Promise
Task.findByIdAndDelete("60892b7fee80743f0880b238").then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

// Using async-await
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount("608821c8e327c723240b1fde").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})