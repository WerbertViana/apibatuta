import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Content from '../typeorm/entitites/Content';
import ContentRepository from '../typeorm/repositories/ContentRepository';

interface IRequest {
  name: string;
  image: string;
  music: string;
  video: string;
  items_id: string;
}

class CreateContentService {
  public async execute({ name, image, music, video, items_id }: IRequest): Promise<Content> {
    
    const contentRepository = getCustomRepository(ContentRepository);
    const ItemExists = await itemsRepository.findByTitle(title);
    

    if (ItemExists) {
      throw new AppError('Já existe uma item cadastrado com o mesmo nome');
    }

    const item = itemsRepository.create({  
      feed_id,
      title,
      icon,
      show_feed: false
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateContentService;