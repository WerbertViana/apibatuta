import { getCustomRepository } from "typeorm";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";

class ListAllContentService {
  public async execute(): Promise<Object | undefined> {

    const itemsRepository = getCustomRepository(ItemsRepository);
    const items = itemsRepository.find();
    
    const itemsIds = (await items).map(items => items.id)

    let resp = [];

    for(let i=0; i<itemsIds.length; i++) {
        let itemsContent = await itemsRepository.findByContent(itemsIds[i]);
        resp.push(itemsContent)
    }

    return resp;
  }
}

export default ListAllContentService;