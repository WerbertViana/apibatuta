import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';
import feedsRouter from '@modules/feeds/routes/feeds.routes';
import questionsRouter from '@modules/questions/routes/questions.routes';
import itemsRouter from '@modules/items/routes/items.routes';
import alternativesRouter from '@modules/alternatives/routes/alternatives.routes';
import contentRouter from '@modules/content/routes/content.routes';
import feedsallRouter from '@modules/feeds/routes/feeds.allitems.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/feeds', feedsRouter);
routes.use('/questions', questionsRouter);
routes.use('/items', itemsRouter);
routes.use('/alternatives', alternativesRouter);
routes.use('/content', contentRouter);
routes.use('/allfeeds', feedsallRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'Conectado!' });
})

export default routes;
