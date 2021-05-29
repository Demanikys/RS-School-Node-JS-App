import * as usersRepo from './user.memory.repository';
import { IUser } from '../../types';

const getAll = () => usersRepo.getAllUsers();
const saveUserService = (user: IUser) => usersRepo.saveUser(user);
const getUserByIdService = (id: string) => usersRepo.getUserById(id);
const updateUserByIdService = (user: IUser) => usersRepo.updateUserById(user);
const deleteUserByIdService = (id: string) => usersRepo.deleteUserById(id);

export {
  getAll,
  saveUserService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserByIdService,
};
