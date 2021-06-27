import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.header('Authorization');

  if (header) {
    const [type, token] = header.split(' ');
    if (type !== 'Bearer') {
      res.status(401).send('Unauthorized');
    } else {
      try {
        jwt.verify(token!, process.env['VERY_SECRET_KEY']!);
        return next();
      } catch (error) {
        res.status(401).send('Unauthorized');
      }
    }
  }
  res.status(401).send('Unauthorized');
  return null;
};

export default auth;
