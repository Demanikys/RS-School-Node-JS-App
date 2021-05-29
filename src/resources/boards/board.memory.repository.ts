import { deleteTasksWithBoard } from '../tasks/task.service';
import { IBoard } from '../../types';

const boards: IBoard[] = [];

/**
 * getAll func return all existed boards
 * @returns {Array} array of existed boards
 */
const getAllBoards = () => boards;

/**
 * saveBoard func create new board
 * @param {Object} board board which need to be created
 * @returns {Object} created board
 */
const saveBoard = (board: IBoard) => {
  boards.push(board);
  return board;
};

/**
 * getBoardById func find and return board by id
 * @param {String} id id of board for search
 * @returns {Object} found board as Object
 */
const getBoardById = async (id: string) => {
  const board = await boards.find((item) => item.id === id);
  return board;
};

/**
 * updateBoardById func is looking for board by id and update it with new params
 * @param {Object} board board which should be updated
 * @returns {Object} updated board
 */
const updateBoardById = async (board: IBoard) => {
  const index = await boards.findIndex((item) => item.id === board.id);
  boards[index] = board;
  return board;
};

/**
 * deleteBoardById func is looking for board by id and delete it with all tasks on it
 * @param {String} id id of board for delete
 * @returns {undefined}
 */
const deleteBoardById = async (id: string) => {
  const index = await boards.findIndex((item) => item.id === id);
  boards.splice(index, 1);
  deleteTasksWithBoard(id);
};

export {
  getAllBoards,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
