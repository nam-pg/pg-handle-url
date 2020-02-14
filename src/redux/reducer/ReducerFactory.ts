import {combineReducers} from 'redux';
import AppReducer from './AppReducer';

const ReducerFactory = combineReducers({
  appData: AppReducer.reducer,
});

export default ReducerFactory;
