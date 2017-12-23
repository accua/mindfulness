import { combineReducers } from 'redux';
import EntriesReducer from './reducerEntries';


const rootReducer = combineReducers({
  entries: EntriesReducer
});

export default rootReducer;
