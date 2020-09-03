import React from 'react';
import {connect} from 'react-redux';
import FormSelect from 'semantic-ui-react/dist/commonjs/collections/Form/FormSelect';
import {createChangeLanguageCodeAction} from '../../actions/action-creators';
import {languages} from '../../constants/languages';
import {getLanguageTitle} from '../../selectors/languages';
import {getLanguageCode, getLanguageCodeError} from '../../selectors/wizard';

class StepLanguage extends React.Component {
  onChange(event, selectedOption) {
    this.props.changeLanguageCode(selectedOption.value);
  }

  render() {
    return (
      <FormSelect
        fluid
        value={this.props.languageCode}
        options={Object.keys(languages).map((key) => ({
          value: key,
          text: getLanguageTitle(key)
        }))}
        error={this.props.languageCodeError}
        onChange={this.onChange.bind(this)}
        placeholder='Select language'
      />
    );
  }
}

export const StepLanguageConnected = connect(
  (state) => ({
    languageCode: getLanguageCode(state),
    languageCodeError: getLanguageCodeError(state)
  }),
  {
    changeLanguageCode: createChangeLanguageCodeAction
  }
)(StepLanguage)
