import { getRepository } from 'typeorm';
import { Task } from '../../entites/tasks';
/**
 * getAllTasks func return array with all tasks
 * @returns {Array} array of tasks
 */
const getAllTasks = () => {
    const taskRepository = getRepository(Task);
    return taskRepository.find();
};
/**
 * saveTask func create new task
 * @param {Object} task task which need to be created
 * @returns {Object} created task
 */
const saveTask = async (task) => {
    const taskRepository = getRepository(Task);
    const newTask = taskRepository.create(task);
    const savedTask = taskRepository.save(newTask);
    return savedTask;
};
/**
 * getTaskById func looking for task by id and return it
 * @param {String} taskId id of task for looking
 * @returns {Object} task
 */
const getTaskById = async (taskId) => {
    const taskRepository = getRepository(Task);
    const task = await taskRepository.findOne(taskId);
    return task;
};
/**
 * updateTaskById func looking for task by id and update it
 * @param {Object} task task which need to be updated including new params
 * @returns {Object} updated task
 */
const updateTaskById = async (task) => {
    const taskRepository = getRepository(Task);
    const updatedRes = await taskRepository.update(task.id, task);
    return updatedRes.raw;
};
/**
 * deleteTaskById func looking for task by id and delete it
 * @param {String} id id of task which should be deleted
 * @returns {undefined}
 */
const deleteTaskById = async (id) => {
    const taskRepository = getRepository(Task);
    const deletionRes = await taskRepository.delete(id);
    if (deletionRes.affected)
        return 'DELETED';
    return 'NOT_FOUND';
};
/**
 * deleteTasksWithBoard func is deleting all tasks which connecting with board
 * @param {String} id id of deleting board
 * @returns {undefined}
 */
const deleteTasksWithBoard = async (id) => {
    const taskRepository = getRepository(Task);
    const deletionRes = await taskRepository.delete({ boardId: id });
    if (deletionRes.affected)
        return 'DELETED';
    return 'NOT_FOUND';
};
/**
 * updateTaskInUserDelete func is clearing all tasks from deleted user
 * @param {String} id id of deleting user
 * @returns {undefined}
 */
const updateTaskInUserDelete = async (id) => {
    const taskRepository = getRepository(Task);
    const updateRes = await taskRepository.update({ userId: id }, { userId: null });
    return updateRes.raw;
};
export { getAllTasks, saveTask, getTaskById, updateTaskById, deleteTaskById, deleteTasksWithBoard, updateTaskInUserDelete, };
