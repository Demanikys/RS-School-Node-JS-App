import boardsRepo from './board.memory.repository';

const getAll = () => boardsRepo.getAllBoards();
const saveBoard = (board) => boardsRepo.saveBoard(board);
const getBoardById = (id) => boardsRepo.getBoardById(id);
const updateBoardById = (board) => boardsRepo.updateBoardById(board);
const deleteBoardById = (id) => boardsRepo.deleteBoardById(id);

export {
  getAll,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
