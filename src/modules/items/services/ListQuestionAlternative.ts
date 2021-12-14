import ListQuestionService from "../services/ListQuestionService";
import { getCustomRepository } from "typeorm";
import Items from "../typeorm/entities/Items";
import ItemsRepository from "../typeorm/repositories/ItemsRepository";
import ListAlternativesService from "@modules/questions/services/ListAlternativesService";
import QuestionsRepository from "@modules/questions/typeorm/repositories/QuestionsRepository";


interface Iproduct {
    id: string;
}


class ListQuestionAlternative {

    public async execute({ id }: Iproduct): Promise<Object | undefined> {

        const listQuestion = new ListQuestionService();

        const questions = await listQuestion.execute({ id });

        const alternatives = questions?.question;

        const alternativesIDs = alternatives?.map((a)=>
        a.id
        );

        let teste = [];

        const questionsRepository = getCustomRepository(QuestionsRepository);
        
        if(alternativesIDs) {
            for(let i=0; i<alternativesIDs.length; i++) {
                teste.push(await questionsRepository.findByAlternatives(alternativesIDs[i]))
            }
        }
        
        return teste;
    }
}

export default ListQuestionAlternative;