import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Items from '../typeorm/entities/Items';
import ItemsRepository from '../typeorm/repositories/ItemsRepository';

interface IRequest {
  feed_id: string;
  title: string;
  icon: string;
  content: number;
}

class CreateItemService {
  public async execute({ title, icon, content, feed_id }: IRequest): Promise<Items> {
    
    const itemsRepository = getCustomRepository(ItemsRepository);
    const ItemExists = await itemsRepository.findByTitle(title);
    

    if (ItemExists) {
      throw new AppError('Já existe uma item cadastrado com o mesmo nome');
    }

    const item = itemsRepository.create({  
      feed_id,
      title,
      icon,
      content
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;