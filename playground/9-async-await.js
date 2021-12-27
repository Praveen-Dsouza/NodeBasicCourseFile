const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    // throw new Error('Something went wrong')
    // return 'Praveen' // Promise { 'Praveen' }

    const sum = await add(1, -99) // 2sec wait
    const sum2 = await add(sum, 50) //2sec wait
    const sum3 = await add(sum2, -3) //2sec wait
    return sum3 //6sec result = 153
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})