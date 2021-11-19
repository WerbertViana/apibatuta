import { getCustomRepository } from "typeorm";
import Feed from "../typeorm/entities/Feed";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";


interface Iproduct {
    id: string;
}


class ListItemsService {

    public async execute({ id }: Iproduct): Promise<Feed | undefined> {

        const feedsRepository = getCustomRepository(FeedsRepository);
        const feed = await feedsRepository.findByItems(id);
       
        return feed;
    }
}

export default ListItemsService;