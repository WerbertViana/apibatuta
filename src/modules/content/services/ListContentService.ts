import { getCustomRepository } from "typeorm";
import Content from "../typeorm/entities/Content";
import ContentRepository from "../typeorm/repositories/ContentRepository";

class ListContentService {
  public async execute(): Promise<Content[]> {
    const contentRepository = getCustomRepository(ContentRepository);

    const content = contentRepository.find();

    return content;
  }
}

export default ListContentService;