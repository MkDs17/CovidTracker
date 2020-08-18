// import npm : createStore
import { createStore, applyMiddleware, compose } from 'redux';

// import reducer(s)
import reducer from './reducer';

import dataMiddleWare from './middlewares/dataMiddleware';


const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Améliorations pour le store
const enhancers = composeEnhancers(
  applyMiddleware(
    dataMiddleWare,
  ),
);

// Création du store
const store = createStore(
  reducer,
  enhancers,
);

// Export
export default store;
