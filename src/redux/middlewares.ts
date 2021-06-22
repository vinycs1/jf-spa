import { routerMiddleware } from 'connected-react-router';
import { createAxiosMiddleware } from '../shared/axios/axios.middleware';

export const middlewares = [
  createAxiosMiddleware(),
  routerMiddleware,
];
