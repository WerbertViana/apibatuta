import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Alternative from "../typeorm/entities/Alternative";
import AlternativesRepository from "../typeorm/repositories/AlternativesRepository";

interface IRequest {
  id: string;
}

class ShowAlternativeService {
  public async execute({ id }: IRequest): Promise<Alternative> {
    const alternativesRepository = getCustomRepository(AlternativesRepository);

    const alternative = await alternativesRepository.findById(id);

    if (!alternative){
      throw new AppError('Alternativa não encontrado.');
    }
    return alternative;
  }
}

export default ShowAlternativeService;
