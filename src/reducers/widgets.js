import {localStorageDecorator} from './local-storage-decorator';
import {actionTypes} from '../constants/action-types';

const initialState = {
  list: [{id: 1, languageCode: 'en', name: 'test'}] // {id, languageCode, name} todo: remove sample
}

export const widgetsReducer = localStorageDecorator(
  'widgets',
  ['list'],
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.addWidget:
        return {
          ...state,
          list: state.list.concat([{
            id: action.id,
            languageCode: action.languageCode,
            name: action.name
          }])
        };
      case actionTypes.removeWidget:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.id)
        };
      default:
        return state;
    }
  }
)
