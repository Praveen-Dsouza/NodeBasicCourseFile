require('../src/db/mongoose')
const User = require('../src/models/user')

/*
Using Promise
User.findByIdAndUpdate("608928175cba1f0aa8a2fea1", { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

// Using async-await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('608928175cba1f0aa8a2fea1', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})