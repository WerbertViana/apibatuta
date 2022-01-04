import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import {hash} from 'bcryptjs';

interface IRequest {
  nome: string;
  email: string;
  senha: string;
}

class CreateUserService {
  public async execute({ nome, email, senha }: IRequest): Promise<User> {
    
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);
    const usersExist = await usersRepository.findByName(nome);

    if (usersExist) {
      throw new AppError('Já existe um usuario cadastrado com mesmo nome. Favor tentar novamente!');
    }

    if (emailExists) {
      throw new AppError('Já existe um email cadastrado com mesmo nome. Favor tentar novamente!');
    }

    const hashedSenha = await hash(senha, 8);

    
    const user = usersRepository.create({  
      nome,
      email,
      senha: hashedSenha,
      vida: 3,
      xp: 0,
      batutas: 0,
      elo: "ferro",
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;