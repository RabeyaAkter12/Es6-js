const Students = [
    {
        student1:{
            name: 'abul',
            age: '17',
            isMale: true,
            education:{
                class: 7,
                subject: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
                marks:{
                    bangla: 35,
                    english: 23,
                    math: 36
                }
            }
        },
        student2:{
            name: 'babul',
            age: '19',
            isMale: false,
            education:{
                class: 10,
                subject: ['GK', 'english', 'math'],
                school: 'Dhaka high school',
                marks:{
                    GK: 55,
                    english: 30,
                    math: 46
                }
            }
        },
        student3:{
            name: 'kabul',
            age: '15',
            isMale: true,
            education:{
                class: 8,
                subjects: ['bangla', 'english', 'math'],
                school: 'borabor high school',
                marks:{
                    bangla: 50,
                    english: 28,
                    math: 41
                }
            }
        },
        student4:{
            name: 'tabul',
            age: '18',
            isMale: false,
            education:{
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'nurjahan high school',
                marks:{
                    bangla: 35,
                    english: 23,
                    math: 36
                }
            }
        },
        student5:{
            name: 'yabul',
            age: '11',
            isMale: true,
            education:{
                class: 4,
                subjects: ['bangla', 'english', 'math'],
                school: 'faisal high school',
                marks:{
                    bangla: 36,
                    english: 73,
                    math: 61
                }
            }
        }
    }
]

console.log(Students[0].student1.education.subject[1]);

Students.map(student => {
    for(let item in student){
        const {name, age, isMale, education} = student[item];
       
        const { subjects } = education;
        
        const information = `
        My Name is ${name}.
        My age is ${age}.
        My gender is ${isMale === true ? "Male" : "Female"}.
        My subjects are ${subjects.foreach(subject => subject)}
        `
        console.log(information)
    }
})

