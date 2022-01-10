import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

class ListItemsService {
  public async execute(): Promise<Items[]> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const items = await itemsRepository.find();

    // const resul = [];
    // let j =1;
    // while (j < items.length + 1) {
    //   for (let i = 0; i < items.length; i++) {
    //     if (items[i].position == j) {
    //       resul.push(items[i]);
    //       j++;
    //     }
    //   }
    // }

    items.sort(function (a, b) {
      if (a.position < b.position) return -1;
      if (a.position > b.position) return 1;
      return 0;
    })

    return items;
  }
}

export default ListItemsService;