import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ContentController from '../controllers/ContentController';

const contentRouter = Router();
const contentController = new ContentController();

contentRouter.post(
    '/:items_id',
    celebrate({
        [Segments.PARAMS]: {
            items_id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            image: Joi.string().required(),
            music: Joi.string(),
            video: Joi.string()
        },
    }),
    contentController.create
);

contentRouter.get(
    '/',
    contentController.index
);

contentRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    contentController.show
);

contentRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    contentController.delete
);

contentRouter.put(
    '/atualizar/:id/:items_id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
            items_id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            image: Joi.string().required(),
            music: Joi.string(),
            video: Joi.string()
        },
    }),
    contentController.update
);


export default contentRouter;