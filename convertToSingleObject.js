const Persons = [
    {id: 'ID01', name: 'abul vai', age: 23},
    {id: 'ID02', name: 'babul vai', age: 23},
    {id: 'ID03', name: 'kabul vai', age: 23},
    {id: 'ID04', name: 'nabul vai', age: 23}
]     //eta ke bole array off objects

const info = {}
// Object.name = 'Mehedy'
// Object['name'] = 'Mehedy'

Persons.map(person => {
    info[person.id] = person.name
})
 console.log(info.ID03)
