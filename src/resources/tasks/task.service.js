const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const saveTask = (task) => tasksRepo.saveTask(task);
const getTaskById = (taskId) => tasksRepo.getTaskById(taskId);
const updateTaskById = (task) => tasksRepo.updateTaskById(task)
const deleteTaskById = (id) => tasksRepo.deleteTaskById(id)

module.exports = { getAll, saveTask, getTaskById, updateTaskById, deleteTaskById };
