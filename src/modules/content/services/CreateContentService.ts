import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Content from '../typeorm/entities/Content';
import ContentRepository from '../typeorm/repositories/ContentRepository';

interface IRequest {
  name: string;
  image: string;
  music: string;
  video: string;
  items_id: string;
}

class CreateContentService {
  public async execute({ name, image, music, video, items_id }: IRequest): Promise<Content> {

    const contentRepository = getCustomRepository(ContentRepository);
    const ContentExists = await contentRepository.findByName(name);


    if (ContentExists) {
      throw new AppError('Já existe uma conteúdo cadastrado com o mesmo nome');
    }

    const content = contentRepository.create({
      name,
      image,
      music,
      video,
      items_id
    });

    await contentRepository.save(content);

    return content;
  }
}

export default CreateContentService;