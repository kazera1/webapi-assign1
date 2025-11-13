const school = {
    students: [],
    instructors: [],
    
    addStudent(name, id, grade) {
        this.students.push({name: name, id: id, grade: grade});
    },
    
    getStudent(index) {
        return this.students[index];
    },
    
    addInstructor(name, subject) {
        this.instructors.push({name: name, subject: subject});
    },
    
    getInstructor(index) {
        return this.instructors[index];
    },
    
    getTotalStudents() {
        return this.students.length;
    },
    
    getTotalInstructors() {
        return this.instructors.length;
    }
};

module.exports = school;

