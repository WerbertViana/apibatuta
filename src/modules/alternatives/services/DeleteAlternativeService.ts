import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import AlternativesRepository from "../typeorm/repositories/AlternativesRepository";

interface IRequest {
  id: string;
}

class DeleteAlternativeService {
  public async execute({ id }: IRequest): Promise<void> {
    const alternativesRepository = getCustomRepository(AlternativesRepository);

    const alternative = await alternativesRepository.findById(id);

    if (!alternative){
      throw new AppError('Feed não encontrado.');
    }

    await alternativesRepository.remove(alternative);
  }
}

export default DeleteAlternativeService;
