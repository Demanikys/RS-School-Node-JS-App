"use strict";
const usersRepo = require('./user.memory.repository.ts');
const getAll = () => usersRepo.getAllUsers();
const saveUserService = (user) => usersRepo.saveUser(user);
const getUserByIdService = (id) => usersRepo.getUserById(id);
const updateUserByIdService = (user) => usersRepo.updateUserById(user);
const deleteUserByIdService = (id) => usersRepo.deleteUserById(id);
module.exports = {
    getAll,
    saveUserService,
    getUserByIdService,
    updateUserByIdService,
    deleteUserByIdService,
};
