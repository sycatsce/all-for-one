import React from 'react';
import Navigator from './navigation/Navigator';
import Reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}