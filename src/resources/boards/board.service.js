const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const saveBoard = (board) => boardsRepo.saveBoard(board);
const getBoardById = (id) => boardsRepo.getBoardById(id);
const updateBoardById = (board) => boardsRepo.updateBoardById(board);
const deleteBoardById = (id) => boardsRepo.deleteBoardById(id);

module.exports = {
  getAll,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
