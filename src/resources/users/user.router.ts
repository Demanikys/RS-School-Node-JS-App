import { Request, Response, Router } from 'express';
// import User from './user.model';
import * as usersService from './user.service';
import { User } from '../../entites/user';

const router = Router();

router.route('/').get(async (_, res: Response) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map((user: User) => User.toResponse(user)));
  res.end();
});

router.post('/', async (req: Request, res: Response) => {
  const user = await usersService.saveUserService(req.body);
  res.status(201).json(User.toResponse(user));
});

router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const user = req.params['userId'] ? await usersService.getUserByIdService(req.params['userId']) : null;
    if (user !== null) {
      res.status(200).send(User.toResponse(user));
    }
  } catch (error) {
    console.log(error);
  }

  res.writeHead(404);
  res.end('undefined');
});

router.put('/:userId', async (req: Request, res: Response) => {
  try {
    const user = await usersService.updateUserByIdService(req.body);
    if (user !== 'NOT_FOUND') {
      res.status(200).json(/* User.toResponse(user) */ user);
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:userId', async (req: Request, res: Response) => {
  if (req.params['userId']) {
    await usersService.deleteUserByIdService(req.params['userId']);
  }

  res.status(204).end();
});

export default router;
