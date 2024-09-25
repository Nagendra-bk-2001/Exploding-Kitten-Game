import { combineReducers } from 'redux';
import userReducer from './userReducer';
import gameReducer from './gameReducer'; // Make sure this import is correct

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export default rootReducer;