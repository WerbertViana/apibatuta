import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Content from '../typeorm/entitites/Content';
import ContentRepository from '../typeorm/repositories/ContentRepository';

interface IRequest {
  image: string;
  music: string;
  video: string;
  name: string;
}

class CreateUserService {
  public async execute({ image, music, video, name }: IRequest): Promise<Content> {
    
    const contentRepository = getCustomRepository(ContentRepository);
    const contentExist = await contentRepository.findByName(name);

    if (contentExist) {
      throw new AppError('Já existe um conteúdo cadastrado com mesmo nome. Favor tentar novamente!');
    }
    
    const content = contentRepository.create({  
      name,
      image,
      music,
      video
    });

    await contentRepository.save(content);

    return content;
  }
}

export default CreateUserService;