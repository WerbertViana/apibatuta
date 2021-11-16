import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';
import feedsRouter from '@modules/feeds/routes/feeds.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/feeds', feedsRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'Conectado!' });
})

export default routes;
