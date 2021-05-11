const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
  res.end();
});

router.post('/', async (req, res) => {
  const boardId = req.baseUrl.split('/')[2]
  const task = await tasksService.saveTask(new Task({...req.body, boardId}));
  res.status(201).json(task);
});

router.get('/:taskId', async (req, res) => {
  // const boardId = req.baseUrl.split('/')[2]
  const task = await tasksService.getTaskById(req.params.taskId);
  if(!task) {
    res.writeHead(404);
    res.end();
    return
  } 
  res.status(200).json(task);
})

router.put('/:taskId', async (req, res) => {
  const task = await tasksService.updateTaskById(req.body);
  res.status(200).json(task);
})

router.delete('/:taskId', async (req, res) => {
  await tasksService.deleteTaskById(req.params.taskId);
  res.status(204).end();
})

module.exports = router;
