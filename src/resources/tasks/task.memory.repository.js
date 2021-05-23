let tasks = [];

/**
 * getAllTasks func return array with all tasks
 * @returns {Array} array of tasks
 */
const getAllTasks = () => tasks;

/**
 * saveTask func create new task
 * @param {Object} task task which need to be created
 * @returns {Object} created task
 */
const saveTask = (task) => {
  tasks.push(task);
  return task;
};

/**
 * getTaskById func looking for task by id and return it
 * @param {String} taskId id of task for looking 
 * @returns {Object} task
 */
const getTaskById = async (taskId) => tasks.find((item) => item.id === taskId);

/**
 * updateTaskById func looking for task by id and update it
 * @param {Object} task task which need to be updated including new params
 * @returns {Object} updated task
 */
const updateTaskById = async (task) => {
  const index = await tasks.findIndex((item) => item.id === task.id);
  tasks[index] = task;
  return task;
};

/**
 * deleteTaskById func looking for task by id and delete it
 * @param {String} id id of task which should be deleted
 * @returns {undefined}
 */
const deleteTaskById = async (id) => {
  const index = await tasks.findIndex((item) => item.id === id);
  tasks.splice(index, 1);
};

/**
 * deleteTasksWithBoard func is deleting all tasks which connecting with board
 * @param {String} id id of deleting board
 * @returns {undefined}
 */
const deleteTasksWithBoard = async (id) => {
  tasks = await tasks.filter((item) => item.boardId === id);
};

/**
 * updateTaskInUserDelete func is clearing all tasks from deleted user
 * @param {String} id id of deleting user
 * @returns {undefined}
 */
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
  getAllTasks,
  saveTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasksWithBoard,
  updateTaskInUserDelete,
};
