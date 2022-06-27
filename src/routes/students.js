const express = require('express');
const students = require('../conttrollers/ControllerStudents');

const router = express.Router();

router.post('/', (req, res) => {
  const student = {
    email: req.body.email,
    password: req.body.password,
  };
  students.addStudent(student);
  res.status(201).json(student);
});

router.get('/', (req, res) => {
  res.status(200).json(students.getStudents());
});

router.get('/:studentId', (req, res) => {
  res.status(200).json(students.getStudent(req.params.studentId));
});

router.delete('/:studentId', (req, res) => {
  res.status(200).json(students.deleteStudent(req.params.studentId));
});

router.put('/:studentId', (req, res) => {
  const id = req.params.studentId;
  const { oldPassword } = req.body;
  const { newPassword } = req.body;
  if (students.changePassword(id, oldPassword, newPassword)) {
    res.status(200).json({ message: 'Senha alterada com sucesso.' });
  } else {
    res.status(400).json({ message: 'Erro: Senha não alterada.' });
  }
});

module.exports = router;
