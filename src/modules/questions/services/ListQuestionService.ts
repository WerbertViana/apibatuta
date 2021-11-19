import { getCustomRepository } from "typeorm";
import Question from "../typeorm/entities/Question";
import QuestionsRepository from "../typeorm/repositories/QuestionsRepository";

class ListQuestionService {
  public async execute(): Promise<Question[]> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const questions = questionsRepository.find();

    return questions;
  }
}

export default ListQuestionService;