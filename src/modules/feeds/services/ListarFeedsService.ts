import { getCustomRepository } from "typeorm";
import Feed from "../typeorm/entities/Feed";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

class ListFeedsService {
  public async execute(): Promise<Feed[]> {
    const feedsRepository = getCustomRepository(FeedsRepository);

    const feeds = feedsRepository.find();

    return feeds;
  }
}

export default ListFeedsService;