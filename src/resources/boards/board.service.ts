import * as boardsRepo from './board.memory.repository';
import { IBoard } from '../../types';

const getAll = () => boardsRepo.getAllBoards();
const saveBoard = (board: IBoard) => boardsRepo.saveBoard(board);
const getBoardById = (id: string) => boardsRepo.getBoardById(id);
const updateBoardById = (board: IBoard) => boardsRepo.updateBoardById(board);
const deleteBoardById = (id: string) => boardsRepo.deleteBoardById(id);

export {
  getAll,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
