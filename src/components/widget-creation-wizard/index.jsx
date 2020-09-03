import {push} from "connected-react-router";
import React from 'react';
import {connect} from 'react-redux';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Step from 'semantic-ui-react/dist/commonjs/elements/Step';
import styled from 'styled-components';
import * as uniqid from 'uniqid';
import {
  createAddWidgetAction,
  createNextStepAction,
  createPrevStepAction,
  createResetWizardAction, createSetWizardErrorsAction
} from '../../actions/action-creators';
import {firstStep, lastStep} from '../../reducers/wizard';
import {getLanguageCode, getName, getWizardStep} from '../../selectors/wizard';
import {hasErrors, validateLanguageStep, validateNameStep} from '../../validations/wizard-validation';
import {StepLanguageConnected} from './step-language';
import {StepNameConnected} from './step-name';

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  margin: 40px 0;
  
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

class WidgetCreationWizard extends React.Component {
  validate(cbOnSuccess) {
    let errors;
    if (this.props.step === 'languageStep') {
      errors = validateLanguageStep(this.props.languageCode);
    }
    if (this.props.step === 'nameStep') {
      errors = validateNameStep(this.props.name);
    }
    this.props.setErrors(errors);
    if (!hasErrors(errors)) {
      cbOnSuccess();
    }
  }

  onCancelClick() {
    this.props.resetWizard();
    this.props.push('/');
  }

  onPrevStepClick() {
    this.props.prevStep();
  }

  onNextStepClick() {
    this.validate(this.props.nextStep);
  }

  onFinishClick() {
    this.validate(() => {
      this.props.addWidget(
        uniqid(),
        this.props.languageCode,
        this.props.name
      );
      this.props.resetWizard();
      this.props.push('/');
    });
  }

  render() {
    const isPrevStepAvailable = this.props.step !== firstStep;
    const isNextStepAvailable = this.props.step !== lastStep;
    const isLastStep = this.props.step === lastStep;

    let stepComponent;
    switch (this.props.step) {
      case 'languageStep':
        stepComponent = (<StepLanguageConnected/>);
        break;
      default:
        stepComponent = (<StepNameConnected/>);
    }

    return (
      <PageWrapper>
        <Header textAlign='center' size='large'>Add widget</Header>
        <Container text>
          <Segment>
            <Step.Group size='small' fluid>
              <Step active={this.props.step === 'languageStep'}>
                <Icon name='language'/>
                <Step.Content>
                  <Step.Title>Language</Step.Title>
                </Step.Content>
              </Step>
              <Step active={this.props.step === 'nameStep'}>
                <Icon name='heading'/>
                <Step.Content>
                  <Step.Title>Name</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            <StyledForm>
              {stepComponent}
            </StyledForm>
            <ButtonsWrapper>
              <Button
                negative basic
                icon='cancel'
                content='Cancel'
                onClick={this.onCancelClick.bind(this)}
              />
              <Button
                secondary basic
                disabled={!isPrevStepAvailable}
                icon='step backward'
                content='Back'
                onClick={this.onPrevStepClick.bind(this)}
              />
              <Button
                secondary basic
                disabled={!isNextStepAvailable}
                icon='step forward'
                content='Next'
                onClick={this.onNextStepClick.bind(this)}
              />
              <Button
                primary basic
                disabled={!isLastStep}
                icon='flag outline'
                content='Finish'
                onClick={this.onFinishClick.bind(this)}
              />
            </ButtonsWrapper>
          </Segment>
        </Container>
      </PageWrapper>
    );
  }
}

export const WidgetCreationWizardConnected = connect(
  (state) => ({
    step: getWizardStep(state),
    languageCode: getLanguageCode(state),
    name: getName(state)
  }),
  {
    push,
    resetWizard: createResetWizardAction,
    nextStep: createNextStepAction,
    prevStep: createPrevStepAction,
    setErrors: createSetWizardErrorsAction,
    addWidget: createAddWidgetAction
  }
)(WidgetCreationWizard);
