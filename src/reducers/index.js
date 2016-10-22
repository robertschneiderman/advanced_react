import { combineReducers } from 'redux';
import authentificationReducer from './authentification';

const rootReducer = combineReducers({
  authentificated: authentificationReducer
});

export default rootReducer;
