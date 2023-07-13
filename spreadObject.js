const person = {
    name: 'Hero Alom',
    age: 34
}
const user = {
    name: 'mofiz ali',
    phone: '348465498416',
    age: 34,
    address:'bari nai',
    pass: [1, 5, 6, 4, 5]
}

const {name: myName, phone, age, pass} = user

for(let i of pass){
    console.log(i)
}
// console.log(p)
console.log(myName)
console.log(phone)



