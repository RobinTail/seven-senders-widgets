import {actionTypes} from '../constants/action-types';

const steps = ['languageStep', 'nameStep'];
export const firstStep = steps.slice().shift();
export const lastStep = steps.slice().pop();

const initialState = {
  step: firstStep,
  languageCode: null,
  name: null,
  errors: {
    languageCode: null,
    name: null
  }
};

export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.nextStep:
      const nextStep = steps[steps.indexOf(state.step) + 1];
      return {
        ...state,
        step: nextStep
      };
    case actionTypes.prevStep:
      return {
        ...state,
        step: steps[steps.indexOf(state.step) - 1]
      };
    case actionTypes.resetWizard:
      return initialState;
    case actionTypes.changeLanguageCode:
      return {
        ...state,
        languageCode: action.languageCode,
        errors: {
          ...state.errors,
          languageCode: null
        }
      };
    case actionTypes.changeName:
      return {
        ...state,
        name: action.name,
        errors: {
          ...state.errors,
          name: null
        }
      };
    case actionTypes.setWizardErrors:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      };
    default:
      return state;
  }
}
