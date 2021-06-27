import * as tasksRepo from './task.memory.repository';
import { Task } from '../../entites/tasks';

const getAll = () => tasksRepo.getAllTasks();
const saveTask = (task: Task) => tasksRepo.saveTask(task);
const getTaskById = (taskId: string) => tasksRepo.getTaskById(taskId);
const updateTaskById = (task: Task) => tasksRepo.updateTaskById(task);
const deleteTaskById = (id: string) => tasksRepo.deleteTaskById(id);
const deleteTasksWithBoard = (id: string) => tasksRepo.deleteTasksWithBoard(id);
const updateTaskInUserDelete = (id: string) => tasksRepo.updateTaskInUserDelete(id);

export {
  getAll,
  saveTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasksWithBoard,
  updateTaskInUserDelete,
};
