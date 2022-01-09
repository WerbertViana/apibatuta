import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

class ListItemsService {
  public async execute(): Promise<Items[]> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const items = await itemsRepository.find();

    const resul: any[] = [];
    let j =1;
    while (j < items.length + 1) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].position == j) {
          resul.push(items[i]);
          j++;
        }
      }
    }

    return resul;
  }
}

export default ListItemsService;