import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
    id: string;
    xp: number;
}

class UpdateXpService {
    public async execute({ id, xp }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(id);

        if (!user) {
            throw new AppError('Usuário não encontrado.');
        }

        user.xp = xp;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateXpService;
