import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, {}, enhancer);

export default store