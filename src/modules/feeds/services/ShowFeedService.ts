import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Feed from "../typeorm/entities/Feed";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

interface IRequest {
  id: string;
}

class ShowFeedService {
  public async execute({ id }: IRequest): Promise<Feed> {
    const feedsRepository = getCustomRepository(FeedsRepository);

    const feed = await feedsRepository.findById(id);

    if (!feed){
      throw new AppError('Feed não encontrado.');
    }
    return feed;
  }
}

export default ShowFeedService;
