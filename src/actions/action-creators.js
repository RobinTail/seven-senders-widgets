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

export function createNextStepAction() {
  return {
    type: actionTypes.nextStep
  };
}

export function createPrevStepAction() {
  return {
    type: actionTypes.prevStep
  };
}

export function createResetWizardAction() {
  return {
    type: actionTypes.resetWizard
  };
}

export function createChangeLanguageCodeAction(languageCode) {
  return {
    type: actionTypes.changeLanguageCode,
    languageCode
  };
}

export function createChangeNameAction(name) {
  return {
    type: actionTypes.changeName,
    name
  };
}

export function createSetWizardErrorsAction(errors) {
  return {
    type: actionTypes.setWizardErrors,
    errors
  };
}
