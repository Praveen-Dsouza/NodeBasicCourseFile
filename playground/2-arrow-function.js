// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

// Arrow function don't bind to their own this
const event = {
    name: 'Birthday Party',
    guestList: ['Praveen', 'Vivian', 'Daniel'],
    printGuestList() { 
        console.log('Guest list for ' + this.name) 

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
    
}

event.printGuestList()