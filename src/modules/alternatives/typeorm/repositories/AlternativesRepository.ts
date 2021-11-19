import { EntityRepository, Repository } from 'typeorm';
import Alternative from '../entities/Alternative';

@EntityRepository(Alternative)
class AlternativesRepository extends Repository<Alternative> {
  
  public async findByName(name: string): Promise<Alternative | undefined> {
    const item = await this.findOne({
      where: {
        name,
      },
    });

    return item;
  }

  public async findById(id: string): Promise<Alternative | undefined> {
    const item = await this.findOne({
      where: {
        id,
      },
    });
    
    return item;
  }

}

export default AlternativesRepository;