const instructors = require('../database/instructors');

const sequenceId = Object.values(instructors).length + 1;

const sequence = {
  _id: sequenceId,
  get id() { return this._id++; },
};

function addInstructor(instructor) {
  const newInstructors = instructor;
  if (!newInstructors.id) newInstructors.id = sequence.id;
  instructors[newInstructors.id] = newInstructors;
  return instructor;
}

function getInstructor(id) {
  return instructors[id] || {};
}

function getInstructors() {
  return Object.values(instructors);
}

function deleteStudent(id) {
    const student = students[id] || {};
    if (students.hasOwnProperty(id)) {
      delete students[id];
    }
    return student;
  }