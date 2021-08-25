import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'Conectado!' });
})

export default routes;
