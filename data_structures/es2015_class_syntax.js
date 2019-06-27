class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    // CLASS METHOD - more for a utility function and can't be called by a class instance!!!
    static enrollStudents(){
        return "ENROLLING STUDENTS!!!";
    }
    //instance method
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(scores){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        var sum = this.scores.reduce(function(a,b){return a+b;});
        return sum/this.scores.length;
    }
}
var firstStudent = new Student('colt', 'steel', 1);
var secondStudent = new Student('berk', 'polat', 2);
console.log(firstStudent.lastName, secondStudent.firstName);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(Student.enrollStudents());
//=====================================
// How to add class methods
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
