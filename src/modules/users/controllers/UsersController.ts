import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUserService from '../services/ListUserService';
import ShowUserService from '../services/ShowUserService';
import UpdateLifeService from '../services/UpdateLifeService';
import UpdateUserService from '../services/UpdateUserService';
import UpdateXpService from '../services/UpdateXpService';


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

  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUser = new ShowUserService();

    const user = await showUser.execute({ id });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body;
    const { id } = request.params;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      id,
      nome,
      email,
      senha,
    });

    return response.json(user);
  }

  public async lifeUpdate(request: Request, response: Response): Promise<Response> {
    const { vida } = request.body;
    const { id } = request.params;

    const updateUser = new UpdateLifeService();

    const user = await updateUser.execute({
      id,
      vida
    }
    );

    return response.json(user);
  }

  public async xpUpdate(request: Request, response: Response): Promise<Response> {
    const { xp } = request.body;
    const { id } = request.params;

    const updateUser = new UpdateXpService();

    const user = await updateUser.execute({
      id,
      xp
    }
    );

    return response.json(user);
  }

}