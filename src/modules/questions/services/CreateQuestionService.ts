import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Question from '../typeorm/entities/Question';
import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

interface IRequest {
    name: string;
    correct_alternative: string;
    correct_option: string;
    levels: string;
    elo: string;
    items_id: string;
}

class CreateQuestionService {
  public async execute({ name, correct_alternative, correct_option, levels, elo, items_id }: IRequest): Promise<Question> {
    
    const questionsRepository = getCustomRepository(QuestionsRepository);
    const questionExists = await questionsRepository.findByName(name)
   

    if (questionExists) {
      throw new AppError('Já existe uma questão cadastrada com mesmo nome');
    }
    
    const question = questionsRepository.create({  
        name,
        correct_alternative,
        correct_option,
        levels,
        elo,
        items_id
    });

    await questionsRepository.save(question);

    return question;
  }
}

export default CreateQuestionService;