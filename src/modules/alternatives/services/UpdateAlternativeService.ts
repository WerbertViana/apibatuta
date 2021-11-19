import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Alternative from "../typeorm/entities/Alternative";
import AlternativesRepository from "../typeorm/repositories/AlternativesRepository";

interface IRequest {
    id: string;
    name: string;
    image: string;
    option: string;
    question_id: string;
}

class UpdateAlternativeService {
  public async execute({ id, name, image, option, question_id }: IRequest): Promise<Alternative> {

    const alternativesRepository = getCustomRepository(AlternativesRepository);
    const alternativeNameExists = await alternativesRepository.findByName(name);
    const alternative = await alternativesRepository.findById(id);
    

    if (alternativeNameExists && alternativeNameExists.id !== id) {
      throw new AppError('Já existe uma alternativa cadastrada com o mesmo nome');
    }

    if (!alternative){
      throw new AppError('Alternativa não encontrada.');
    }

    alternative.name = name;
    alternative.image = image;
    alternative.option = option;
    alternative.question_id = question_id;

    await alternativesRepository.save(alternative);

    return alternative;
  }
}

export default UpdateAlternativeService;
