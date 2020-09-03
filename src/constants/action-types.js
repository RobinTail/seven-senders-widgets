import keymirror from 'keymirror';

export const actionTypes = keymirror({
  addWidget: null,
  removeWidget: null,
  nextStep: null,
  prevStep: null,
  resetWizard: null,
  changeLanguageCode: null,
  changeName: null,
  setWizardErrors: null,
  openModal: null,
  closeModal: null
});
