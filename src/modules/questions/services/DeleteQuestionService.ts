import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import QuestionsRepository from "../typeorm/repositories/QuestionsRepository";

interface IRequest {
  id: string;
}

class DeleteQuestionService {
  public async execute({ id }: IRequest): Promise<void> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne(id);

    if (!question){
      throw new AppError('Questão não encontrada.');
    }

    await questionsRepository.remove(question);
  }
}

export default DeleteQuestionService;
