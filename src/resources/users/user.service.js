const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAllUsers();
const saveUser = (user) => usersRepo.saveUser(user);
const getUserById = (id) => usersRepo.getUserById(id);
const updateUserById = (user) => usersRepo.updateUserById(user);
const deleteUserById = (id) => usersRepo.deleteUserById(id);

module.exports = {
  getAll,
  saveUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
