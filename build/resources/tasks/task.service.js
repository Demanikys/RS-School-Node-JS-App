import * as tasksRepo from './task.memory.repository';
const getAll = () => tasksRepo.getAllTasks();
const saveTask = (task) => tasksRepo.saveTask(task);
const getTaskById = (taskId) => tasksRepo.getTaskById(taskId);
const updateTaskById = (task) => tasksRepo.updateTaskById(task);
const deleteTaskById = (id) => tasksRepo.deleteTaskById(id);
const deleteTasksWithBoard = (id) => tasksRepo.deleteTasksWithBoard(id);
const updateTaskInUserDelete = (id) => tasksRepo.updateTaskInUserDelete(id);
export { getAll, saveTask, getTaskById, updateTaskById, deleteTaskById, deleteTasksWithBoard, updateTaskInUserDelete, };
