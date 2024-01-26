import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
    id: string;
    vida: number;
}

class UpdateLifeService {
    public async execute({ id, vida }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = await usersRepository.findOne(id);

        if (!user) {
            throw new AppError('Usuário não encontrado.');
        }

        user.vida = vida;

        await usersRepository.save(user);

        return user;
    }
}

export default UpdateLifeService;
