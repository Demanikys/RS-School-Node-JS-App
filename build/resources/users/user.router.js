const router = require('express').Router();
const User = require('./user.model.ts');
const usersService = require('./user.service');
router.route('/').get(async (req, res) => {
    if (req)
        null;
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
    const user = await usersService.getUserByIdService(req.params["userId"]);
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
    await usersService.deleteUserByIdService(req.params["userId"]);
    res.status(204).end();
});
module.exports = router;
export {};
