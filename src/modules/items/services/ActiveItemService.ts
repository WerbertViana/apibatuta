import AppError from "@shared/errors/AppError";
import { getCustomRepository, SimpleConsoleLogger } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

interface IRequest {
    id: string;
}

class ActiveItemService {
  public async execute({ id }: IRequest): Promise<Items> {

    const itemsRepository = getCustomRepository(ItemsRepository);
    const allitems = await itemsRepository.find();

    const item = await itemsRepository.findById(id);
    

    if (!item){
      throw new AppError('Item não encontrado.');
    }

    item.show_feed = true;

    await itemsRepository.save(item);

    return item;
  }
}

export default ActiveItemService;
