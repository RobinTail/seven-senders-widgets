import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {widgetsReducer} from './widgets';
import {wizardReducer} from './wizard';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  widgets: widgetsReducer,
  wizard: wizardReducer
});
