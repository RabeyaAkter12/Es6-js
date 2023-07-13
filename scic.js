const student = [
    {name: 'mehedy bro', email: 'mehedy@gmail.com', avg: 56, fiftyPercent: false},
    {name: 'rakib bro', email: 'rakib@gmail.com', avg: 60, fiftyPercent: true},
    {name: 'sunny bro', email: 'sunny@gmail.com', avg: 42, fiftyPercent: false},
    {name: 'sakib bro', email: 'sakib@gmail.com', avg: 52, fiftyPercent: true},
    {name: 'sojib bro', email: 'sojil@gmail.com', avg: 32, fiftyPercent: true},
    {name: 'sakil bro', email: 'sakil@gmail.com', avg: 37, fiftyPercent: true},
    {name: 'jackie bro', email: 'jakie@gmail.com', avg: 57, fiftyPercent: true}
]

const result = student.filter(student => student.avg >= 50);
console.log(result)

result.map( odhom =>{
    const {name, email, avg} = odhom;
    // console.log(`Odhom er naam ${name}. odhom er email ${email}, Odhom er avarage number ${avg}`)
    console.log(name)
})
