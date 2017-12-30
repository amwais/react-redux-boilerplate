import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ConnectedComponent from './components/ConnectedComponent';
import AppRouter from './routers/AppRouter';

const store = configureStore();

const Jsx = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<Jsx />, document.getElementById('app'));