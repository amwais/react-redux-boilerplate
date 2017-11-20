import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from './reducers';

const middlewares = [thunk];

export default createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
