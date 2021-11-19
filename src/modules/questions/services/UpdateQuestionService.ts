import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Question from "../typeorm/entities/Question";
import QuestionsRepository from "../typeorm/repositories/QuestionsRepository";

interface IRequest {
    id: string;
    name: string;
    correct_alternative: string;
    correct_option: string;
    levels: string;
    elo: string;
}

class UpdateQuestionService {
    elo: string;
    public async execute({ id, name, correct_alternative, correct_option, levels, elo }: IRequest): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne(id);
    const QuestionExistName = await questionsRepository.findByName(name);

    if (!question){
      throw new AppError('Questão não encontrada.');
    }

    if (QuestionExistName && QuestionExistName.id !== id) {
      throw new AppError('Já existe uma questão cadastrada com mesmo nome. Favor tentar novamente!');
    }

    question.name = name;
    question.correct_alternative = correct_alternative;
    question.correct_option = correct_option;
    question.levels = levels;
    question.elo = elo;


    await questionsRepository.save(question);

    return question;
  }
}

export default UpdateQuestionService;
