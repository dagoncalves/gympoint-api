import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá' });
});

export default routes;
