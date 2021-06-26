import { Router } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { User } from '../../entites/user';
import { createAdmin } from './login.service';

dotenv.config();

const { VERY_SECRET_KEY } = process.env;
const router = Router();

router.post('/', async (req, res) => {
  await createAdmin();

  const { login, password } = req.body;
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ login });
  if (user) {
    const { id } = user;
    const result = await bcrypt.compareSync(password, user.password);

    if (result!) {
      const token = await jwt.sign({ id, login }, VERY_SECRET_KEY!);
      res.status(200).json({ token });
    } else {
      res.status(403).send('Unauthorized');
    }
    res.status(403).send('Unauthorized');
  }
  res.status(403).send('Forbidden');
});

export default router;
