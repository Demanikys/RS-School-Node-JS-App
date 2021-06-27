import * as usersRepo from './user.memory.repository';
import { User } from '../../entites/user';

const getAll = () => usersRepo.getAllUsers();
const saveUserService = (user: User) => usersRepo.saveUser(user);
const getUserByIdService = (id: string) => usersRepo.getUserById(id);
const updateUserByIdService = (user: User) => usersRepo.updateUserById(user);
const deleteUserByIdService = (id: string) => usersRepo.deleteUserById(id);

export {
  getAll,
  saveUserService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserByIdService,
};
