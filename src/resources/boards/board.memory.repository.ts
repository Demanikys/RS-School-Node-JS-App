// import { deleteTasksWithBoard } from '../tasks/task.service';
// import { IBoard } from '../../types';
import { getRepository } from 'typeorm';
import { Board } from '../../entites/board';

/**
 * getAll func return all existed boards
 * @returns {Array} array of existed boards
 */
const getAllBoards = () => {
  const boardRepository = getRepository(Board);
  return boardRepository.find();
};

/**
 * saveBoard func create new board
 * @param {Object} board board which need to be created
 * @returns {Object} created board
 */
const saveBoard = (board: Board) => {
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create(board);
  const savedBoard = boardRepository.save(newBoard);

  return savedBoard;
};

/**
 * getBoardById func find and return board by id
 * @param {String} id id of board for search
 * @returns {Object} found board as Object
 */
const getBoardById = async (id: string) => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);
  return board;
};

/**
 * updateBoardById func is looking for board by id and update it with new params
 * @param {Object} board board which should be updated
 * @returns {Object} updated board
 */
const updateBoardById = async (id: string, board: Board) => {
  const boardRepository = getRepository(Board);
  const res = await boardRepository.findOne(id);
  const newBoard = { ...res, ...board };
  if (res === undefined) return 'NOT_FOUND';
  const updateRes = await boardRepository.save(newBoard);
  return updateRes;
};

/**
 * deleteBoardById func is looking for board by id and delete it with all tasks on it
 * @param {String} id id of board for delete
 * @returns {undefined}
 */
const deleteBoardById = async (id: string) => {
  const boardRepository = getRepository(Board);
  const deletionRes = await boardRepository.delete(id);

  if (deletionRes.affected) return 'DELETED';
  return 'NOT_FOUND';
};

export {
  getAllBoards,
  saveBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
};
