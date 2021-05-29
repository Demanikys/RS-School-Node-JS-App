const users = [];
/**
 * getAll func returns all users in base
 * @returns {Array} array of users
 */
const getAllUsers = () => users;
/**
 * saveUser func create new user in base
 * @param {Object} user user which need to be created
 * @returns {Object} created user
 */
const saveUser = (user) => {
    users.push(user);
    return user;
};
/**
 * getUserById func find and return user by id
 * @param {String} id id of user
 * @returns {Object} user
 */
const getUserById = async (id) => {
    const user = await users.find((item) => item.id === id);
    return user;
};
/**
 * updateUserById func looking for user with user.id and update it
 * @param {Object} user user which should be update
 * @returns {Object} updated user
 */
const updateUserById = async (user) => {
    const index = await users.findIndex((item) => item.id === user.id);
    users[index] = user;
    return user;
};
/**
 * deleteUserById func delete user with passed id and update tasks
 * @param {string} id id of user
 * @returns {undefined}
 */
const deleteUserById = async (id) => {
    const index = await users.findIndex((item) => item.id === id);
    users.splice(index, 1);
    // updateTaskInUserDelete(id);
};
export { getAllUsers, saveUser, getUserById, updateUserById, deleteUserById, };
