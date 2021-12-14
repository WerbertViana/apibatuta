import ListContentService from '../services/ListContentService'
import ListItemsService from '@modules/items/services/ListItemsService';
import { Request, Response } from 'express';
import ActiveItemService from '../services/ActiveItemService';
import CreateItemService from '../services/CreateItemService';
import DeleteItemsService from '../services/DeleteItemsService';
import ShowItemService from '../services/ShowItemService';
import UpdateItemService from '../services/UpdateItemService';
import ListAllContentService from '../services/ListAllContentService';
import ListQuestionService from '../services/ListQuestionService';
import ListQuestionAlternative from '../services/ListQuestionAlternative';




export default class ItemsController {

  public async create(request: Request, response: Response): Promise<Response> {

    const { title, icon } = request.body;
    const { feed_id } = request.params;

    const createItem = new CreateItemService();

    const item = await createItem.execute({
      feed_id,
      title,
      icon
    });

    return response.json(item);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listItems = new ListItemsService();

    const items = await listItems.execute();

    return response.json(items);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showItem = new ShowItemService();

    const item = await showItem.execute({ id });

    return response.json(item);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteItems = new DeleteItemsService();

    await deleteItems.execute({ id });

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, icon } = request.body;
    const { id, feed_id } = request.params;

    const updateItem = new UpdateItemService();

    const items = await updateItem.execute({
      id,
      feed_id,
      title,
      icon
    });

    return response.json(items);
  }

  public async active(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateItem = new ActiveItemService();

    const items = await updateItem.execute({
      id
    });

    return response.json(items);
  }

  public async content(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const listContent = new ListContentService();

    const items = await listContent.execute({ id });

    return response.json(items);
  }

  public async allcontent(request: Request, response: Response): Promise<Response> {
    const listContent = new ListAllContentService();

    const content = await listContent.execute();

    return response.json(content);
  }

  public async question(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const listQuestion = new ListQuestionService();

    const questions = await listQuestion.execute({ id });

    return response.json(questions);
  }

  public async questionalternative(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const listQuestion = new ListQuestionAlternative();

    const questions = await listQuestion.execute({ id });

    return response.json(questions);
  }

}