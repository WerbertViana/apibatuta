import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Feed from "../typeorm/entities/Feed";
import FeedsRepository from "../typeorm/repositories/FeedsRepository";

interface IRequest {
  id: string;
  lesson: number;
  progress: boolean;
}

class UpdateFeedService {
  public async execute({ id, lesson, progress }: IRequest): Promise<Feed> {

    const feedsRepository = getCustomRepository(FeedsRepository);
    const feedExists = await feedsRepository.findByLesson(lesson);
    const feed = await feedsRepository.findById(id);
    

    if (feedExists && feedExists.id !== id) {
      throw new AppError('Já existe uma lição cadastrada com o mesmo número');
    }

    if (!feed){
      throw new AppError('Feed não encontrado.');
    }

    feed.lesson = lesson;
    feed.progress = progress;

    await feedsRepository.save(feed);

    return feed;
  }
}

export default UpdateFeedService;
