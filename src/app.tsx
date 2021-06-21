import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './redux/store';

const store = configureStore(/* provide initial state if any */);

export const App = () => (
  <Provider store={store}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Provider>
);
