import { Request, Response } from 'express';
import CreateContentService from '../services/CreateContentService';
import DeleteContentService from '../services/DeleteContentService';
import ListContentService from '../services/ListContentService';
import ShowContentService from '../services/ShowContentService';
import UpdateContentService from '../services/UpdateContentService';





export default class ContentController {

    public async create(request: Request, response: Response): Promise<Response> {

        const { name, image, music, video } = request.body;
        const { items_id } = request.params;

        const createContent = new CreateContentService();

        const content = await createContent.execute({
            items_id,
            name,
            image,
            music,
            video
        });

        return response.json(content);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const listContent = new ListContentService();

        const content = await listContent.execute();

        return response.json(content);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showContent = new ShowContentService();

        const content = await showContent.execute({ id });

        return response.json(content);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteContent = new DeleteContentService();

        await deleteContent.execute({ id });

        return response.json([]);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { name, image, music, video } = request.body;
        const { id, items_id } = request.params;

        const updateContent = new UpdateContentService();

        const content = await updateContent.execute({
            id, 
            items_id,
            name,
            image,
            music,
            video
        });

        return response.json(content);
    }

}