import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import authConfig from '@config/auth';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse{
  user: User;
  token: string;
}


class CreateSessionsService {
  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);
    

    if (!user) {
      throw new AppError('Email ou senha incorretos! Favor tentar novamente.',401);
    }

    const passwordConfirmed = await compare(senha, user.senha);

    if (!passwordConfirmed) {
        throw new AppError('Email ou senha incorretos! Favor tentar novamente.',401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
    })

    return {
      user, 
      token
    };
  }
}

export default CreateSessionsService;