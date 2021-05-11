let tasks = [];

const getAll = () => tasks;

const saveTask = (task) => {
  tasks.push(task);
  return task;
};

const getTaskById = async (taskId) => tasks.find((item) => item.id === taskId);

const updateTaskById = async (task) => {
  const index = await tasks.findIndex((item) => item.id === task.id);
  tasks[index] = task;
  return task;
};

const deleteTaskById = async (id) => {
  const index = await tasks.findIndex((item) => item.id === id);
  tasks.splice(index, 1);
};

const deleteTasksWithBoard = async (id) => {
  tasks = await tasks.filter((item) => item.boardId === id);
};

const updateTaskInUserDelete = async (id) => {
  tasks = await tasks.map((item) => {
    if (item.userId === id) {
      const task = item;
      task.userId = null;
      return task;
    }
    return item;
  });
};

module.exports = {
  getAll,
  saveTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasksWithBoard,
  updateTaskInUserDelete,
};
