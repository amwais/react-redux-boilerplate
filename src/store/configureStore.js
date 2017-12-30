import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducers/counter';
import titleReducer from '../reducers/title';

export default () => {
  const store = createStore(
    combineReducers({
      counter: counterReducer,
      title: titleReducer
    }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

 