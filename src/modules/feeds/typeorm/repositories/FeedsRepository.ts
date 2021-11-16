import { EntityRepository, Repository } from 'typeorm';
import Feed from '../entities/Feed';


@EntityRepository(Feed)
class FeedsRepository extends Repository<Feed> {
  
  public async findByLesson(lesson: number): Promise<Feed | undefined> {
    const feed = await this.findOne({
      where: {
        lesson,
      },
    });
    return feed;
  }

  public async findById(id: string): Promise<Feed | undefined> {
    const feed = await this.findOne({
      where: {
        id,
      },
    });

    return feed;
  }

}

export default FeedsRepository;