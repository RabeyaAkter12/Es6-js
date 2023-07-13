const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number2 = [32, 45, 76];

const newArr = [999, ...number, ...number2,777, 456]
console.log(newArr);

const [a,b, ...rest]= number;
console.log(a, b, rest)
// console.log(Math.min(...number))
// console.log(...number)

// console.log(Math.min(3, 2, 4))
// console.log(Math.max(3, 2, 4)) 
const A = [1, 23, 24, 4];
const B = [...A];

A.push(89)
B.push(49)

console.log('A:', A)
console.log('B:', B)