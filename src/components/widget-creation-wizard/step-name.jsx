import React from 'react';
import {connect} from 'react-redux';
import FormInput from 'semantic-ui-react/dist/commonjs/collections/Form/FormInput';
import {createChangeNameAction} from '../../actions/action-creators';
import {getName, getNameError} from '../../selectors/wizard';

class StepName extends React.Component {
  onChange(event, inputData) {
    this.props.changeName(inputData.value);
  }

  render() {
    return (
      <FormInput
        fluid
        value={this.props.name || ''}
        error={this.props.nameError}
        onChange={this.onChange.bind(this)}
        label='Widget name'
        placeholder='Enter the widget name'
      />
    );
  }
}

export const StepNameConnected = connect(
  (state) => ({
    name: getName(state),
    nameError: getNameError(state)
  }),
  {
    changeName: createChangeNameAction
  }
)(StepName)
