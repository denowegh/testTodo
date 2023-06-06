import { combineReducers } from 'redux';

import todosReducer from './TodosReducer';
import userReducer from "./userReducer";
const appReducer = combineReducers({
  todosReducer,
  userReducer
});

export default appReducer;
