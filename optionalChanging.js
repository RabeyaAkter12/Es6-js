const petOwner ={
    name: 'Hero Alom',
    contact: {
        phone: '01551806773',
        email: 'xyz4455@gmail.com',
    },
    cat: {
        name: 'Minu',
        info:{
            colour: 'black and white',
            weight: '1.2kg'
        }
    }
}

// console.log(petOwner?.dog?.name)
// console.log(petOwner.cat.info.colour)
// console.log(petOwner.cat.info.weight)
console.log(petOwner.cat?.info?.food?.price)

console.log(' hi bro')