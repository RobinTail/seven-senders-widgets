import {combineReducers} from 'redux';
import {widgetsReducer} from './widgets';

const rootReducer = combineReducers({
  widgets: widgetsReducer
});

export default rootReducer;
