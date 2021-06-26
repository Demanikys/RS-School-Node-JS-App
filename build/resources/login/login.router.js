import { Router } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../../entites/user';
dotenv.config();
const { VERY_SECRET_KEY } = process.env;
const router = Router();
router.post('/', async (req, res) => {
    const { login, password } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ login });
    if (user) {
        const { id } = user;
        if (user.password === password) {
            const token = await jwt.sign({ id, login }, VERY_SECRET_KEY);
            res.status(200).json(token);
        }
        else {
            res.status(403).send('Unauthorized');
        }
        res.status(403).send('Unauthorized');
    }
});
export default router;
