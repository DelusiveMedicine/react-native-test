import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import Navigation from './Navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
