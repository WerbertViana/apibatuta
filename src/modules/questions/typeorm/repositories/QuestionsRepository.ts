import { EntityRepository, Repository } from 'typeorm';
import Question from '../entities/Question';

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {
  
  public async findByName(name: string): Promise< Question | undefined> {
    const questions = await this.findOne({
      where: {
        name,
      },
    });

    return questions;
  }

  public async findById(id: string): Promise< Question | undefined> {
    const question = await this.findOne({
      where: {
        id,
      },
    });

    return question;
  }

  public async findByAlternatives(id: string): Promise<Question | undefined> {
    const question = await this.findOne(id, {
        relations: ['alternatives'],
    });

    return question;
  }

}

export default QuestionsRepository;