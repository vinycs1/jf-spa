import { AxiosActionRequest } from './axios.types';
import { AxiosClient } from './axios-client';

export const createAxiosMiddleware = () => (store) => (next) => (action) => {
  if (action instanceof AxiosActionRequest) {
    const { config } = action;

    AxiosClient
      .get(config.url).then((res) => store.dispatch({
        type: action.actionTypes.success,
        payload: res,
        requestAction: action,
        requestConfig: config,
      })).catch((res) => store.dispatch({
        type: action.actionTypes.fail,
        payload: res,
        requestAction: action,
        requestConfig: config,
      }));
  }

  return next(action);
};
