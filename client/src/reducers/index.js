import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import EntriesReducer from './reducerEntries';


const rootReducer = combineReducers({
  entries: EntriesReducer,
  form: FormReducer
});

export default rootReducer;
