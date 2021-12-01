import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ContentRepository from "../typeorm/repositories/ContentRepository";

interface IRequest {
  id: string;
}

class DeleteContentService {
  public async execute({ id }: IRequest): Promise<void> {
    const contentRepository = getCustomRepository(ContentRepository);

    const content = await contentRepository.findById(id);

    if (!content){
      throw new AppError('Conteúdo não encontrado.');
    }

    await contentRepository.remove(content);
  }
}

export default DeleteContentService;
