import {languages} from '../constants/languages';

export function getLanguageTitle(languageCode) {
  return languages.hasOwnProperty(languageCode) ? languages[languageCode] : 'Unknown language';
}
