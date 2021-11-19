import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AlternativesController from '../controllers/AlternativesController';

const alternativesRouter = Router();
const alternativesController = new AlternativesController();

alternativesRouter.post(
    '/:question_id',
    celebrate({
        [Segments.PARAMS]: {
            question_id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            image: Joi.string().required(),
            option: Joi.string().required(),
        },
    }),
    alternativesController.create
);

alternativesRouter.get(
    '/',
    alternativesController.index
);

alternativesRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    alternativesController.show
);

alternativesRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    alternativesController.delete
);

alternativesRouter.put(
    '/:id/:question_id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
            question_id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            image: Joi.string().required(),
            option: Joi.string().required(),
        },
    }),
    alternativesController.update
);

export default alternativesRouter;