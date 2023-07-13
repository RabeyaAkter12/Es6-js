const person = {
    name: 'abul',
    age: 23,
    contact:{
        phone: '0125465623',
        email: 'rabeyaakter7744@gmail.com'
    },
    education: {
        schoolName: 'Dr. Maleka university and collage',
        subjects: [
            {name:' bangla', mark: 45},
            {name:' english', mark: 50},
            {name:' math', mark: 42}
        ]
        
    }
} 

console.log(person.education.subjects[1].mark)