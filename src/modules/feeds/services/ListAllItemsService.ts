import { getCustomRepository } from "typeorm";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

class ListAllItemsService {
  public async execute(): Promise<Object | undefined> {

    const feedsRepository = getCustomRepository(FeedsRepository);
    const feeds = feedsRepository.find();
    
    const feedIds = (await feeds).map(feed => feed.id)

    let resp = [];

    for(let i=0; i<feedIds.length; i++) {
        let feedItens = await feedsRepository.findByItems(feedIds[i]);
        resp.push(feedItens)
    }

    return resp;
  }
}

export default ListAllItemsService;