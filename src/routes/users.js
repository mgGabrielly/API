const express = require('express');
const users = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  users.addUser(user);
  res.status(201).json(user);
});

router.get('/', (req, res) => {
  res.status(200).json(users.getUsers());
});

router.get('/:userId', (req, res) => {
  console.log(req.params.userId);
  console.log(users.getUsers());
  console.log(users.getUser(req.params.userId));
  res.status(200).json(users.getUser(req.params.userId));
});

module.exports = router;
