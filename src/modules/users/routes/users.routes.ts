import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';




const usersRouter = Router();
const usersController = new UsersController();



usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
        },
    }),
    usersController.create
);

usersRouter.get(
    '/',
    usersController.index
);

usersRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    usersController.show
);

usersRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
    }),
    usersController.delete
);

usersRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            nome: Joi.string().required(),
            email: Joi.string().required(),
            senha: Joi.string().required(),
        },
    }),
    usersController.update
);

export default usersRouter;