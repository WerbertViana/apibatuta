import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Question from "../typeorm/entities/Question";
import QuestionsRepository from "../typeorm/repositories/QuestionsRepository";

interface IRequest {
  id: string;
}

class ShowQuestionService {
  public async execute({ id }: IRequest): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne(id);

    if (!question){
      throw new AppError('Questão não encontrada.');
    }
    return question;
  }
}

export default ShowQuestionService;
