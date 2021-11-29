import { EntityRepository, Repository } from 'typeorm';
import Content from '../entitites/Content';

@EntityRepository(Content)
class ContentRepository extends Repository<Content> {

  public async findByName(name: string): Promise<Content | undefined> {
    const content = await this.findOne({
      where: {
        name,
      },
    });

    return content;
  }
  

  public async findById(id: string): Promise<Content | undefined> {
    const content = await this.findOne({
      where: {
        id,
      },
    });

    return content;
  }

}

export default ContentRepository;