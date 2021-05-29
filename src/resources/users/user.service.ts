const usersRepo = require('./user.memory.repository.ts');

const getAll = () => usersRepo.getAllUsers();
const saveUserService = (user: Object) => usersRepo.saveUser(user);
const getUserByIdService = (id: String) => usersRepo.getUserById(id);
const updateUserByIdService = (user: Object) => usersRepo.updateUserById(user);
const deleteUserByIdService = (id: String) => usersRepo.deleteUserById(id);

module.exports = {
  getAll,
  saveUserService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserByIdService,
};
