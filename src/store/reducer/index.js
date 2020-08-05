  
import { combineReducers } from 'redux';

// j'importe mes reducers
import data from './data';

// je veux combiner mes reducers en un seul, puisque le store gère un seul reducer
const reducer = combineReducers({
  data,
});

export default reducer;
