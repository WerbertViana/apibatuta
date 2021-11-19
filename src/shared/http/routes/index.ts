import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';
import feedsRouter from '@modules/feeds/routes/feeds.routes';
import questionsRouter from '@modules/questions/routes/questions.routes';
import itemsRouter from '@modules/items/routes/items.routes';
import alternativesRouter from '@modules/alternatives/routes/alternatives.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/feeds', feedsRouter);
routes.use('/questions', questionsRouter);
routes.use('/items', itemsRouter);
routes.use('/alternatives', alternativesRouter)

routes.get('/', (request, response) => {
    return response.json({ message: 'Conectado!' });
})

export default routes;
