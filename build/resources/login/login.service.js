import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { User } from '../../entites/user';
const createAdmin = async () => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ login: 'admin' });
    if (!user) {
        const admin = {
            name: 'admin',
            login: 'admin',
            password: 'admin',
        };
        const hash = bcrypt.hashSync(admin.password, 10);
        admin.password = hash;
        const newUser = await userRepository.create(admin);
        await userRepository.save(newUser);
    }
};
export { createAdmin };
