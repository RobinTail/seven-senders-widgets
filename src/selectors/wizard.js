export function getWizardStep(state) {
  return state.wizard.step;
}

export function getLanguageCode(state) {
  return state.wizard.languageCode;
}

export function getName(state) {
  return state.wizard.name;
}

export function getLanguageCodeError(state) {
  return state.wizard.errors.languageCode;
}

export function getNameError(state) {
  return state.wizard.errors.name;
}

