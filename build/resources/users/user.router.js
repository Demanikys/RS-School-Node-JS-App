import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';
const router = Router();
router.route('/').get(async (_, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map((user) => User.toResponse(user)));
    res.end();
});
router.post('/', async (req, res) => {
    const user = await usersService.saveUserService(new User(req.body));
    res.status(201).json(User.toResponse(user));
});
router.get('/:userId', async (req, res) => {
    const user = req.params['userId'] ? await usersService.getUserByIdService(req.params['userId']) : null;
    if (!user) {
        res.writeHead(404);
        res.end();
        return;
    }
    res.status(200).send(User.toResponse(user));
});
router.put('/:userId', async (req, res) => {
    const user = await usersService.updateUserByIdService(req.body);
    res.status(200).json(User.toResponse(user));
});
router.delete('/:userId', async (req, res) => {
    if (req.params['userId']) {
        await usersService.deleteUserByIdService(req.params['userId']);
    }
    res.status(204).end();
});
export default router;
