import {languages} from '../constants/languages';

/**
 * @param languageCode
 * @returns {{languageCode: (null|string)}} error messages object
 */
export function validateLanguageStep(languageCode) {
  return {
    languageCode: languages.hasOwnProperty(languageCode) ? null : 'Please select language from the list'
  };
}

/**
 * @param name
 * @returns {{name: (string|null)}} error messages object
 */
export function validateNameStep(name) {
  return {
    name: name === null || name.trim().length === 0 ? 'Widget name is required' : null
  };
}

export function hasErrors(errorMessagesObject) {
  return Object.values(errorMessagesObject)
    .map((errorMessage) => Boolean(errorMessage))
    .reduce((carry, hasError) => (carry || hasError), false);
}
