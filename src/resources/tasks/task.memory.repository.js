const tasks = [];

const getAll = () => tasks

const saveTask = (task) => {
  tasks.push(task);
  return task;
};

const getTaskById = async (taskId) => tasks.find(item => item.id === taskId)

const updateTaskById = async (task) => {
  const index = await tasks.findIndex((item) => item.id === task.id)
  tasks[index] = task
  return task
}

const deleteTaskById = async (id) => {
  const index = await tasks.findIndex((item) => item.id === id)
  tasks.splice(index, 1)
}
  // TODO: mock implementation. should be replaced during task development

module.exports = { getAll, saveTask, getTaskById, updateTaskById, deleteTaskById};
