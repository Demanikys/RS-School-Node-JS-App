// @ts-nocheck
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../../entites/user';
import { updateTaskInUserDelete } from '../tasks/task.memory.repository';
dotenv.config();
/**
 * getAll func returns all users in base
 * @returns {Array} array of users
 */
const getAllUsers = async () => {
    const userRepository = getRepository(User);
    return userRepository.find();
};
/**
 * saveUser func create new user in base
 * @param {Object} user user which need to be created
 * @returns {Object} created user
 */
const saveUser = async (user) => {
    const savingUser = user;
    await bcrypt.hash(savingUser.password, 10, (err, hash) => {
        savingUser.password = hash;
        if (err)
            console.log(err);
    });
    const userRepository = getRepository(User);
    const newUser = userRepository.create(savingUser);
    const savedUser = userRepository.save(newUser);
    return savedUser;
};
/**
 * getUserById func find and return user by id
 * @param {String} id id of user
 * @returns {Object} user
 */
const getUserById = async (id) => {
    const userRepository = getRepository(User);
    const res = await userRepository.findOne(id);
    if (!res)
        return 'NOT_FOUND';
    return res;
};
/**
 * updateUserById func looking for user with user.id and update it
 * @param {Object} user user which should be update
 * @returns {Object} updated user
 */
const updateUserById = async (user) => {
    const userRepository = getRepository(User);
    const res = await userRepository.findOne(user.id);
    if (res === undefined)
        return 'NOT_FOUND';
    const updateRes = await userRepository.update(user.id, user);
    return updateRes.raw;
};
/**
 * deleteUserById func delete user with passed id and update tasks
 * @param {string} id id of user
 * @returns {undefined}
 */
const deleteUserById = async (id) => {
    const userRepository = getRepository(User);
    const deletionRes = await userRepository.delete(id);
    if (deletionRes.affected) {
        await updateTaskInUserDelete(id);
        return 'DELETED';
    }
    return 'NOT_FOUND';
};
export { getAllUsers, saveUser, getUserById, updateUserById, deleteUserById, };
