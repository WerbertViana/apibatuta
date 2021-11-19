import { Request, Response } from 'express';
import CreateQuestionService from '../services/CreateQuestionService';
import DeleteQuestionService from '../services/DeleteQuestionService';
import ListAlternativesService from '../services/ListAlternativesService';
import ListQuestionService from '../services/ListQuestionService';
import ShowQuestionService from '../services/ShowQuestionService';
import UpdateQuestionService from '../services/UpdateQuestionService';



export default class QuestionsController {
 
  public async create(request: Request, response: Response): Promise<Response> {
        
    const { name, correct_alternative, correct_option, levels, elo } = request.body;
    
    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({
        name,
        correct_alternative,
        correct_option,
        levels,
        elo,
    });

    return response.json(question);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listQuestions = new ListQuestionService();

    const questions = await listQuestions.execute();

    return response.json(questions);
  }

  public async alternatives(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listAlternatives = new ListAlternativesService();

    const questions = await listAlternatives.execute({ id });

    return response.json(questions);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showQuestion = new ShowQuestionService();

    const question = await showQuestion.execute({id});

    return response.json(question);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteQuestion = new DeleteQuestionService();

    await deleteQuestion.execute({id});

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, correct_alternative, correct_option, levels, elo } = request.body;
    const {id} = request.params;

    const updateQuestion = new UpdateQuestionService();

    const question = await updateQuestion.execute({
        id,
        name,
        correct_alternative,
        correct_option,
        levels,
        elo,
    });

    return response.json(question);
  }
  
}