import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

interface IRequest {
  id: string;
}

class ShowItemService {
  public async execute({ id }: IRequest): Promise<Items> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const item = await itemsRepository.findById(id);

    if (!item){
      throw new AppError('Item não encontrado.');
    }
    return item;
  }
}

export default ShowItemService;
