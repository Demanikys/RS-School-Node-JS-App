const { deleteTasksWithBoard } = require('../tasks/task.service');

const boards = [];

const getAll = () => boards;

const saveBoard = (board) => {
  boards.push(board);
  return board;
};

const getBoardById = async (id) => {
  const board = await boards.find((item) => item.id === id);
  return board;
};

const updateBoardById = async (board) => {
  const index = await boards.findIndex((item) => item.id === board.id);
  boards[index] = board;
  return board;
};

const deleteBoardById = async (id) => {
  const index = await boards.findIndex((item) => item.id === id);
  boards.splice(index, 1);
  deleteTasksWithBoard(id);
};

module.exports = {
  getAll,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
