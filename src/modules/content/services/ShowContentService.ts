import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Content from "../typeorm/entities/Content";
import ContentRepository from "../typeorm/repositories/ContentRepository";

interface IRequest {
  id: string;
}

class ShowContentService {
  public async execute({ id }: IRequest): Promise<Content> {
    const contentRepository = getCustomRepository(ContentRepository);

    const content = await contentRepository.findById(id);

    if (!content){
      throw new AppError('Conteúdo não encontrado.');
    }
    return content;
  }
}

export default ShowContentService;
