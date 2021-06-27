import * as boardsRepo from './board.memory.repository';
import { Board } from '../../entites/board';

const getAll = () => boardsRepo.getAllBoards();
const saveBoard = (board: Board) => boardsRepo.saveBoard(board);
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const updateBoardById = (id: string, board: Board) => boardsRepo.updateBoardById(id, board);
const deleteBoardById = (id: string) => boardsRepo.deleteBoardById(id);

export {
  getAll,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
