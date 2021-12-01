import { Router } from 'express';
import FeedsController from '../controllers/FeedsController';

const feedsallRouter = Router();
const feedsController = new FeedsController();

feedsallRouter.get(
    '/',
    feedsController.allitems
);

export default feedsallRouter;