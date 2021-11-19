import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FeedsController from '../controllers/FeedsController';

const feedsRouter = Router();
const feedsController = new FeedsController();

feedsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            show_feed: Joi.boolean().required(),
            show_lesson: Joi.boolean().required(),
            lesson: Joi.number().required(),
            progress: Joi.boolean().required(),
        },
    }),
    feedsController.create
);

feedsRouter.get(
    '/',
    feedsController.index
);

feedsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    feedsController.show
);

feedsRouter.get(
    '/items/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    feedsController.items
);

feedsRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    feedsController.delete
);

feedsRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            lesson: Joi.number().required(),
            progress: Joi.boolean().required(),
        },
    }),
    feedsController.update
);

export default feedsRouter;