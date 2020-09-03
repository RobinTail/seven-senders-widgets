import {actionTypes} from '../constants/action-types';

const initialState = {
  isOpen: false,
  cbOnConfirm: () => {}
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.openModal:
      return {
        ...state,
        isOpen: true,
        cbOnConfirm: action.cbOnConfirm
      };
    case actionTypes.closeModal:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}
