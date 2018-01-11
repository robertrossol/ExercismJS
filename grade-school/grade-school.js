

module.exports = class School {
  constructor() {
    this.students = {}
  }
  roster(grade) {
    if (grade != undefined){
      return this.students[grade].sort();
    } else {
      return this.students;
    }
  }
  add(name, grade) {
    if (this.students[grade] != undefined) {
      this.students[grade].push(name)
      this.students[grade].sort()
    } else {
      this.students[grade]=[name];
    }
  }
  grade(num) {
    if (this.students[num] != undefined) {
      return this.roster(num).sort();
    } else {
      return [];
    }
  }
}

