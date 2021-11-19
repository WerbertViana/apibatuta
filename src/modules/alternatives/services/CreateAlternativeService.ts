import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Alternative from '../typeorm/entities/Alternative';
import AlternativesRepository from '../typeorm/repositories/AlternativesRepository';

interface IRequest {
  name: string;
  image: string;
  option: string;
  question_id: string;
}

class CreateAlternativeService {
  public async execute({ name, image, option, question_id  }: IRequest): Promise<Alternative> {
    
    const alternativesRepository = getCustomRepository(AlternativesRepository);
    const nameExist = await alternativesRepository.findByName(name);
    

    if (nameExist) {
      throw new AppError('Já existe uma alternativa cadastrada com mesmo nome');
    }

    const alternative = alternativesRepository.create({  
        name,
        image,
        option,
        question_id,
    });

    await alternativesRepository.save(alternative);

    return alternative;
  }
}

export default CreateAlternativeService;