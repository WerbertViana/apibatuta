import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

interface IRequest {
  id: string;
}

class DeleteItemsService {
  public async execute({ id }: IRequest): Promise<void> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const item = await itemsRepository.findById(id);

    if (!item){
      throw new AppError('Item não encontrado.');
    }

    await itemsRepository.remove(item);
  }
}

export default DeleteItemsService;
