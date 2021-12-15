import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";


interface Iproduct {
    id: string;
}


class ListContentService {

    public async execute({ id }: Iproduct): Promise<Object | undefined> {

        const itemsRepository = getCustomRepository(ItemsRepository);
        const items = await itemsRepository.findByContent(id);
        const resp = items?.content;
        return resp;
    }
}

export default ListContentService;