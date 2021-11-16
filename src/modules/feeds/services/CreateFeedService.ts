import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Feed from '../typeorm/entities/Feed';
import FeedsRepository from '../typeorm/repositories/FeedsRepository';

interface IRequest {
  lesson: number;
  progress: boolean;
}

class CreateFeedService {
  public async execute({ lesson, progress }: IRequest): Promise<Feed> {
    
    const feedRepository = getCustomRepository(FeedsRepository);
    const feedExists = await feedRepository.findByLesson(lesson);
    

    if (feedExists) {
      throw new AppError('Já existe uma lição cadastrada com o mesmo número');
    }

    const feed = feedRepository.create({  
      lesson,
      progress,
    });

    await feedRepository.save(feed);

    return feed;
  }
}

export default CreateFeedService;