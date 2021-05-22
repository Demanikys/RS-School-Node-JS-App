const { updateTaskInUserDelete } = require('../tasks/task.service');

const users = [];

const getAll = () => users;

const saveUser = (user) => {
  users.push(user);
  return user;
};

const getUserById = async (id) => {
  const user = await users.find((item) => item.id === id);
  return user;
};

const updateUserById = async (user) => {
  const index = await users.findIndex((item) => item.id === user.id);
  users[index] = user;
  return user;
};

const deleteUserById = async (id) => {
  const index = await users.findIndex((item) => item.id === id);
  users.splice(index, 1);
  updateTaskInUserDelete(id);
};

module.exports = {
  getAll,
  saveUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
