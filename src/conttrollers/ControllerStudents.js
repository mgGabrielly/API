const students = require('../database/students');

const sequence = {
  _id: 2,
  get id() { return this._id++; },
};

function addStudent(student) {
  const newStudents = student;
  if (!newStudents.id) newStudents.id = sequence.id;
  students[newStudents.id] = newStudents;
  return student;
}

function getStudent(id) {
  return students[id] || {};
}

function getStudents() {
  return Object.values(students);
}

function deleteStudent(id) {
  const student = students[id] || {};
  if (students.hasOwnProperty(id)) {
    delete students[id];
  }
  return student;
}

module.exports = {
  addStudent, getStudent, getStudents, deleteStudent,
};
