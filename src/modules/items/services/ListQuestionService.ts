import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";


interface Iproduct {
    id: string;
}


class ListQuestionService {

    public async execute({ id }: Iproduct): Promise<Items | undefined> {

        const itemsRepository = getCustomRepository(ItemsRepository);
        const items = await itemsRepository.findByQuestion(id);
       
        return items;
    }
}

export default ListQuestionService;