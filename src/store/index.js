import { createStore, applyMiddleware } from 'redux';
import { participantsReducer } from '../reducers/participants';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(participantsReducer, 
  composeWithDevTools(applyMiddleware(thunk, logger)));