import { getCustomRepository } from "typeorm";
import Question from "../typeorm/entities/Question";
import QuestionsRepository from "../typeorm/repositories/QuestionsRepository";


interface Iproduct {
    id: string;
}


class ListAlternativesService {

    public async execute({ id }: Iproduct): Promise<Question | undefined> {

        const questionsRepository = getCustomRepository(QuestionsRepository);
        const question = await questionsRepository.findByAlternatives(id);
       
        return question;
    }
}

export default ListAlternativesService;