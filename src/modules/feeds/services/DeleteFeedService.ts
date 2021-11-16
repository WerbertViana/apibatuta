import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

interface IRequest {
  id: string;
}

class DeleteFeedService {
  public async execute({ id }: IRequest): Promise<void> {
    const feedsRepository = getCustomRepository(FeedsRepository);

    const feed = await feedsRepository.findById(id);

    if (!feed){
      throw new AppError('Feed não encontrado.');
    }

    await feedsRepository.remove(feed);
  }
}

export default DeleteFeedService;
