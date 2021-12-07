import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import QuestionsController from '../controllers/QuestionsController';

const questionsRouter = Router();
const questionsController = new QuestionsController();

questionsRouter.post(
    '/:items_id',
    celebrate({
        [Segments.PARAMS]: {
            items_id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            correct_alternative: Joi.string().required(),
            correct_option: Joi.string().required(),
            levels: Joi.string().required(),
            elo: Joi.string().required(),
        },
    }),
    questionsController.create
);

questionsRouter.get(
    '/',
    questionsController.index
);

questionsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    questionsController.alternatives
);

questionsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    questionsController.show
);

questionsRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    questionsController.delete
);

questionsRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            correct_alternative: Joi.string().required(),
            correct_option: Joi.string().required(),
            levels: Joi.string().required(),
            elo: Joi.string().required(),
        },
    }),
    questionsController.update
);

export default questionsRouter;