import DeleteQuestionService from '@modules/questions/services/DeleteQuestionService';
import { Request, Response } from 'express';
import CreateAlternativeService from '../services/CreateAlternativeService';
import DeleteAlternativeService from '../services/DeleteAlternativeService';
import ListAlternativeService from '../services/ListAlternativeService';
import ShowAlternativeService from '../services/ShowAlternativeService';
import UpdateAlternativeService from '../services/UpdateAlternativeService';

export default class AlternativesController {
 
  public async create(request: Request, response: Response): Promise<Response> {
    
    const { question_id } = request.params;
    const { name, image, option } = request.body;
    
    const createAlternative = new CreateAlternativeService();

    const alternative = await createAlternative.execute({
        name,
        image,
        option,
        question_id,
    });

    return response.json(alternative);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAlternatives = new ListAlternativeService();

    const alternatives = await listAlternatives.execute();

    return response.json(alternatives);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showAlternative = new ShowAlternativeService();

    const alternative = await showAlternative.execute({id});

    return response.json(alternative);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAlternative = new DeleteAlternativeService();

    await deleteAlternative.execute({id});

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, question_id } = request.params;
    const { name, image, option } = request.body;

    const updateAlternative = new UpdateAlternativeService();

    const alternative = await updateAlternative.execute({
      id,
      name,
      image,
      option,
      question_id,
    });

    return response.json(alternative);
  }
  
}