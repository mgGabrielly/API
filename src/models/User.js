let users = [
  { email: 'jobsontenorio@gmail.com', password: 'Iw278Kx5APKW' },
];

module.exports = {
  getUsers: () => users,
  getUser: (id) => users[id],
  addUser: (user) => users.push(user),
  deleteUser: (id) => {
    const user = users[id];
    users = users.filter((value, index) => index !== id);
    return user;
  },
};
