import { Request, Response } from "express";

const router = require('express').Router();
const User = require('./user.model.ts');
const usersService = require('./user.service');

interface userModel {
  id: String;
  name: String;
  login: String;
  password: String;
}

router.route('/').get(async (req: Request, res: Response) => {
  if (req) null
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map((user: userModel) => User.toResponse(user)));
  res.end();
});

router.post('/', async (req: Request, res: Response) => {
  const user = await usersService.saveUserService(new User(req.body));
  res.status(201).json(User.toResponse(user));
});

router.get('/:userId', async (req: Request, res: Response) => {
  const user = await usersService.getUserByIdService(req.params["userId"]);
  if (!user) {
    res.writeHead(404);
    res.end();
    return;
  }
  res.status(200).send(User.toResponse(user));
});

router.put('/:userId', async (req: Request, res: Response) => {
  const user = await usersService.updateUserByIdService(req.body);
  res.status(200).json(User.toResponse(user));
});

router.delete('/:userId', async (req: Request, res: Response) => {
  await usersService.deleteUserByIdService(req.params["userId"]);
  res.status(204).end();
});

module.exports = router;
