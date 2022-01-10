import { getCustomRepository } from "typeorm";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

class ListAllItemsService {
  public async execute(): Promise<Object | undefined> {

    const feedsRepository = getCustomRepository(FeedsRepository);
    const feeds = feedsRepository.find();

    const feedIds = (await feeds).map(feed => feed.id)

    let resp = [];

    for (let i = 0; i < feedIds.length; i++) {
      let feedItens = await feedsRepository.findByItems(feedIds[i]);
      resp.push(feedItens)
    }

    let items: any[] = [];
    const resul = [];

    for (let i = 0; i < resp.length; i++) {
      items.push(resp[i]?.items)
    }

    
    for(let i =0;i<items.length;i++){
      items[i].sort(function (a: { position: number; }, b: { position: number; }) {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
      })
    }


    for (let i = 0; i < resp.length; i++) {
      resul[i] = {
        id: resp[i]?.id,
        lesson: resp[i]?.lesson,
        show_lesson: resp[i]?.show_lesson,
        progress: resp[i]?.progress,
        created_at: resp[i]?.created_at,
        updated_at: resp[i]?.updated_at,
        items: items[i]
      }
    }


    return resul;
  }
}

export default ListAllItemsService;