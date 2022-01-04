import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

interface IRequest {
    id: string;
    feed_id: string;
    title: string;
    icon: string;
    position: number;
}

class UpdateItemService {
  public async execute({ id, feed_id, title, icon, position }: IRequest): Promise<Items> {

    const itemsRepository = getCustomRepository(ItemsRepository);
    const itemsExists = await itemsRepository.findByTitle(title);
    const item = await itemsRepository.findById(id);
    

    if (itemsExists && itemsExists.id !== id) {
      throw new AppError('Já existe um item cadastrado com o mesmo título');
    }

    if (!item){
      throw new AppError('Item não encontrado.');
    }

    item.feed_id = feed_id;
    item.title = title;
    item.icon = icon;
    item.position = position;
    
    await itemsRepository.save(item);

    return item;
  }
}

export default UpdateItemService;
