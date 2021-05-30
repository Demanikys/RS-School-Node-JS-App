import { Router } from 'express';
import Board from './board.model';
import * as boardsService from './board.service';
const router = Router();
router.route('/').get(async (_, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
    res.end();
});
router.post('/', async (req, res) => {
    const board = await boardsService.saveBoard(new Board(req.body));
    res.status(201).json(board);
});
router.get('/:boardId', async (req, res) => {
    const board = await boardsService.getBoardById(req.params.boardId);
    if (!board) {
        res.writeHead(404);
        res.end();
        return;
    }
    res.status(200).json(board);
});
router.put('/:boardId', async (req, res) => {
    const board = await boardsService.updateBoardById(req.body);
    res.status(200).json(board);
});
router.delete('/:boardId', async (req, res) => {
    if (req.params.boardId) {
        await boardsService.deleteBoardById(req.params.boardId);
    }
    res.status(204).end();
});
export default router;
