import * as tasksRepo from './task.memory.repository';
import { ITask } from '../../types';

const getAll = () => tasksRepo.getAllTasks();
const saveTask = (task: ITask) => tasksRepo.saveTask(task);
const getTaskById = (taskId: string) => tasksRepo.getTaskById(taskId);
const updateTaskById = (task: ITask) => tasksRepo.updateTaskById(task);
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
