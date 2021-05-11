const users = [];

const getAll = () => users;

const saveUser = (user) => {
  users.push(user);
  return user;
  // console.log(users);
};

const getUserById = async (id) => {
  const user = await users.find(item => item.id === id);
  return user;
}

const updateUserById = async (user) => {
  const index = await users.findIndex((item) => item.id === user.id)
  users[index] = user
  return user
}

const deleteUserById = async (id) => {
  const index = await users.findIndex((item) => item.id === id)
  users.splice(index, 1)
}
  // TODO: mock implementation. should be replaced during task development

module.exports = { getAll, saveUser, getUserById, updateUserById, deleteUserById};
