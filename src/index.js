import React from 'react';

import './config/DevTools';
import './config/Reactotron';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
// import { Container } from './styles';
import Routes from './routes';
import store from './store';

YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
