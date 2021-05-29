import * as usersRepo from './user.memory.repository';
const getAll = () => usersRepo.getAllUsers();
const saveUserService = (user) => usersRepo.saveUser(user);
const getUserByIdService = (id) => usersRepo.getUserById(id);
const updateUserByIdService = (user) => usersRepo.updateUserById(user);
const deleteUserByIdService = (id) => usersRepo.deleteUserById(id);
export { getAll, saveUserService, getUserByIdService, updateUserByIdService, deleteUserByIdService, };
