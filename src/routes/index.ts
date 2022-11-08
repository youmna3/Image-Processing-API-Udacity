//will place the  main routes here

import { Router } from 'express';
import imageRoutes from './api/images';

const routes = Router();

routes.use('/images', imageRoutes);

export default routes;
