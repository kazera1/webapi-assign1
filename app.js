const school = require('./school');

// testing the school module
school.addStudent('Nayeon', '001', 'A');
school.addStudent('Jihyo', '002', 'A+');
school.addStudent('Dahyun', '003', 'C');
school.addStudent('Momo', '004', 'F');

school.addInstructor('Ms Mina', 'Math');
school.addInstructor('Ms Sana', 'Science');

// print students
console.log('Students:');
for (let i = 0; i < school.getTotalStudents(); i++) {
    let s = school.getStudent(i);
    console.log(s.name + ' - ' + s.grade);
}

// print instructors
console.log('\nInstructors:');
for (let i = 0; i < school.getTotalInstructors(); i++) {
    let t = school.getInstructor(i);
    console.log(t.name + ' teaches ' + t.subject);
}

console.log('\nTotal: ' + school.getTotalStudents() + ' students, ' + school.getTotalInstructors() + ' instructors');
