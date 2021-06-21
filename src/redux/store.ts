import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createRootReducer } from './reducers';
import { middlewares } from './middlewares';

export const history = createBrowserHistory();

export const configureStore = (preloadedState = {}) => {
  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(...enhancers),
  );

  return store;
};
