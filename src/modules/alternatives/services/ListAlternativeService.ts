import { getCustomRepository } from "typeorm";
import Alternative from "../typeorm/entities/Alternative";
import AlternativesRepository from "../typeorm/repositories/AlternativesRepository";

class ListAlternativeService {
  public async execute(): Promise<Alternative[]> {
    const alternativesRepository = getCustomRepository(AlternativesRepository);

    const alternatives = alternativesRepository.find();

    return alternatives;
  }
}

export default ListAlternativeService;