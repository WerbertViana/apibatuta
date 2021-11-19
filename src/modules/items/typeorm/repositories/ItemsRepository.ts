import { EntityRepository, Repository } from 'typeorm';
import Items from '../entities/Items';

@EntityRepository(Items)
class ItemsRepository extends Repository<Items> {
  
  public async findByTitle(title: string): Promise<Items | undefined> {
    const item = await this.findOne({
      where: {
        title,
      },
    });

    return item;
  }

  public async findById(id: string): Promise<Items | undefined> {
    const item = await this.findOne({
      where: {
        id,
      },
    });
    
    return item;
  }

}

export default ItemsRepository;