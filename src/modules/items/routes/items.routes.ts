import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ItemsController from '../controllers/ItemsController';

const itemsRouter = Router();
const itemsController = new ItemsController();

itemsRouter.post(
    '/:feed_id',
    celebrate({
        [Segments.BODY]: {
            feed_id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            title: Joi.string().required(),
            icon: Joi.string().required()
        },
    }),
    itemsController.create
);

itemsRouter.get(
    '/',
    itemsController.index
);

itemsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    itemsController.show
);


itemsRouter.get(
    '/content/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    itemsController.content
);

itemsRouter.get(
    '/questions/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    itemsController.question
);

itemsRouter.get(
    '/questions/alternatives/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    itemsController.questionalternative
);

itemsRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    itemsController.delete
);

itemsRouter.put(
    '/atualizar/:id/:feed_id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
            feed_id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            title: Joi.string().required(),
            icon: Joi.string().required(),
            content: Joi.number().required(),
        },
    }),
    itemsController.update
);

itemsRouter.put(
    '/ativar/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    itemsController.active
);

export default itemsRouter;