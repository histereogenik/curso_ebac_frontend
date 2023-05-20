const students = ['Nurin', 'Olpos', 'Rahye', 'Sekiro', 'Taror', 'Gymvya'];
const studentsInfo = [];

class Student {
    constructor(studentsName, studentsGrade) {
        this.name = studentsName;
        this.grade = studentsGrade;
    }

    getGrade() {
        console.log(`${this.studentsName}'s final grade is: ${this.grade}`)
    }

    punishmentEasy() {
        if (this.grade > 0 && this.grade <= 10) {
            this.grade -= 1;
        }
    }

    punishmentHard() {
        if (this.grade > 2 && this.grade <= 10) {
            this.grade -= 3;
        } else if (this.grade < 3) {
            this.grade = 0;
        }
    }
}

class English extends Student {
    course = 'English';
    
    getGrade() {
        console.log(`${this.name}'s English final grade is: ${this.grade}`)
    }
}

class Portuguese extends Student {
    course = 'Portuguese';
    
    getGrade() {
        console.log(`${this.name}'s Portuguese final grade is: ${this.grade}`)
    }
}

const addEnglishStudent = (name, grade) => {
    let student = new English(name, grade);
    studentsInfo.push(student);
}

const addPortugueseStudent = (name, grade) => {
    let student = new Portuguese(name, grade);
    studentsInfo.push(student);
}

addEnglishStudent(students[0], 10);
addEnglishStudent(students[1], 8);
addEnglishStudent(students[2], 5);
addPortugueseStudent(students[3], 10);
addPortugueseStudent(students[4], 6);
addPortugueseStudent(students[5], 7);
console.log(studentsInfo);

console.log(studentsInfo[0]);
studentsInfo[0].getGrade();
studentsInfo[0].punishmentEasy();
studentsInfo[0].getGrade();
studentsInfo[0].punishmentHard();
studentsInfo[0].punishmentHard();
studentsInfo[0].punishmentHard();
studentsInfo[0].getGrade();

const areStudentsApproved = student => student.grade > 6;
const areStudentsFailed = student => student.grade < 7;

const studentsApproved = studentsInfo.filter(areStudentsApproved);
const studentsFailed = studentsInfo.filter(areStudentsFailed)

console.log(studentsApproved);
console.log(studentsFailed);

