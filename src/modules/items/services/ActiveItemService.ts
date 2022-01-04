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

    // let j = 0;

    // for (let i=0; i< allitems.length; i++) {
    //   if(allitems[i].id == id) {
    //     j = i;
    //     break;
    //   }
    // }

    // allitems[j].show_feed = true;

    // console.log(j);

    const item = await itemsRepository.findById(id);
    

    if (!item){
      throw new AppError('Item não encontrado.');
    }

    item.show_feed = false;

    await itemsRepository.save(item);

    return item;
  }
}

export default ActiveItemService;
