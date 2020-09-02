import {actionTypes} from '../constants/action-types';

export function createAddWidgetAction(id, languageCode, name) {
  return {
    type: actionTypes.addWidget,
    id, languageCode, name
  };
}

export function createRemoveWidgetAction(id) {
  return {
    type: actionTypes.removeWidget,
    id
  };
}
