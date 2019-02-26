import React from 'react';
import Navigator from './navigation/Navigator';
import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { socketMiddleware } from './middlewares/redux-socket-middleware';

const store = createStore(
  Reducers,
  applyMiddleware(socketMiddleware())
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}