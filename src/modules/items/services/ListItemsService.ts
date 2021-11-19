import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

class ListItemsService {
  public async execute(): Promise<Items[]> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const items = itemsRepository.find();

    return items;
  }
}

export default ListItemsService;