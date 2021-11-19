import ListItemsService from '@modules/items/services/ListItemsService';
import { Request, Response } from 'express';
import CreateItemService from '../services/CreateItemService';
import DeleteItemsService from '../services/DeleteItemsService';
import ShowItemService from '../services/ShowItemService';
import UpdateItemService from '../services/UpdateItemService';




export default class ItemsController {
 
  public async create(request: Request, response: Response): Promise<Response> {
        
    const {title, icon, content} = request.body;
    const {feed_id} = request.params;
    
    const createItem = new CreateItemService();

    const item = await createItem.execute({
      feed_id,  
      title,
      icon,
      content
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

    const item = await showItem.execute({id});

    return response.json(item);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteItems = new DeleteItemsService();

    await deleteItems.execute({id});

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {title, icon, content} = request.body;
    const {id, feed_id} = request.params;

    const updateItem = new UpdateItemService();

    const feed = await updateItem.execute({
      id,
      feed_id,
      title,
      icon,
      content
    });

    return response.json(feed);
  }
  
}