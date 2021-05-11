const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(boards);
  res.end();
});

router.post('/', async (req, res) => {
  const board = await boardsService.saveBoard(new Board(req.body));
  res.status(201).json(board);
});

router.get('/:boardId', async (req, res) => {
  const board = await boardsService.getBoardById(req.params.boardId );
  if(!board) {
    res.writeHead(404);
    res.end();
    return
  } 
  res.status(200).json(board);
})

router.put('/:boardId', async (req, res) => {
  const board = await boardsService.updateBoardById(req.body);
  res.status(200).json(board);
})

router.delete('/:boardId', async (req, res) => {
  await boardsService.deleteBoardById(req.params.userId);
  res.status(204).end();
})

module.exports = router;
