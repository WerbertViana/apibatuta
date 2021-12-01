import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Content from "../typeorm/entities/Content";
import ContentRepository from "../typeorm/repositories/ContentRepository";

interface IRequest {
    id: string;
    name: string;
    image: string;
    music: string;
    video: string;
    items_id: string;
}

class UpdateContentService {
    public async execute({ id, name, image, music, video, items_id }: IRequest): Promise<Content> {

        const contentRepository = getCustomRepository(ContentRepository);
        const contentExists = await contentRepository.findByName(name);
        const content = await contentRepository.findById(id);


        if (contentExists && contentExists.id !== id) {
            throw new AppError('Já existe um conteúdo cadastrado com o mesmo nome');
        }

        if (!content) {
            throw new AppError('Conteúdo não encontrado.');
        }

        content.items_id = items_id;
        content.name = name;
        content.image = image;
        content.music = music;
        content.video = video;

        await contentRepository.save(content);

        return content;
    }
}

export default UpdateContentService;
