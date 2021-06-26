import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const auth = (req, res, next) => {
    const header = req.header('Authorization');
    if (header) {
        const [type, token] = header.split(' ');
        if (type !== 'Bearer') {
            res.status(401).send('Unauthorized');
        }
        else {
            try {
                const result = jwt.verify(token, process.env['VERY_SECRET_KEY']);
                console.log(result);
                return next();
            }
            catch (error) {
                res.status(401).send('Unauthorized');
            }
        }
    }
    res.status(401).send('Unauthorized');
    return null;
};
export default auth;
