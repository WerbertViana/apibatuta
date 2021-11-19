import { Request, Response } from 'express';
import CreateFeedService from '../services/CreateFeedService';
import DeleteFeedService from '../services/DeleteFeedService';
import ListFeedsService from '../services/ListFeedsService';
import ListItemsService from '../services/ListItemsService';
import ShowFeedService from '../services/ShowFeedService';
import UpdateFeedService from '../services/UpdateFeedService';



export default class FeedsController {
 
  public async create(request: Request, response: Response): Promise<Response> {
        
    const {lesson, progress, show_feed, show_lesson} = request.body;
    
    const createFeed = new CreateFeedService();

    const feed = await createFeed.execute({
      show_feed,
      show_lesson,
      lesson,
      progress
    });

    return response.json(feed);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listFeeds = new ListFeedsService();

    const feeds = await listFeeds.execute();

    return response.json(feeds);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showFeed = new ShowFeedService();

    const feed = await showFeed.execute({id});

    return response.json(feed);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteFeedService();

    await deleteUser.execute({id});

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {lesson, progress} = request.body;
    const {id} = request.params;

    const updateUser = new UpdateFeedService();

    const feed = await updateUser.execute({
      id,
      lesson,
      progress
    });

    return response.json(feed);
  }

  public async items(request: Request, response: Response): Promise<Response> {

    const {id} = request.params;

    const listItems = new ListItemsService();

    const feed = await listItems.execute({
      id,
    });

    return response.json(feed);
  }
  
}