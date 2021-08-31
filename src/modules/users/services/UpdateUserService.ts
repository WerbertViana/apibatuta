import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

class UpdateUserService {
  public async execute({ id, nome, email, senha }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    if (!user){
      throw new AppError('Usuário não encontrado.');
    }
    const usersExistsUpdateEmail = await usersRepository.findByEmail(email);
    const usersExistUpdateName = await usersRepository.findByName(nome);

    if (usersExistUpdateName && usersExistUpdateName.id !== id) {
      throw new AppError('Já existe um usuario cadastrado com mesmo nome. Favor tentar novamente!');
    }

    if (usersExistsUpdateEmail && usersExistsUpdateEmail.id !== id) {
      throw new AppError('Já existe um email cadastrado com mesmo nome. Favor tentar novamente!');
    }

    user.nome = nome;
    user.email = email;
    user.senha = senha;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
