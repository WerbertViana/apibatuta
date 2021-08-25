import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';


export default class UsersController {
 
  public async create(request: Request, response: Response): Promise<Response> {
        
    const { nome, email, senha } = request.body;
    
    const createUsers = new CreateUserService();

    const user = await createUsers.execute({
        nome,
        email,
        senha,
    });

    return response.json(user);
  }
}