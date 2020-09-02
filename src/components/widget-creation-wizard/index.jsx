import {push} from "connected-react-router";
import React from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Step from 'semantic-ui-react/dist/commonjs/elements/Step';
import StepContent from 'semantic-ui-react/dist/commonjs/elements/Step/StepContent';
import StepGroup from 'semantic-ui-react/dist/commonjs/elements/Step/StepGroup';
import StepTitle from 'semantic-ui-react/dist/commonjs/elements/Step/StepTitle';
import styled from 'styled-components';

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

/**
 * @todo complete the wizard implementation
 */
class WidgetCreationWizard extends React.Component {
  onCancelClick() {
    this.props.push('/');
  }

  render() {
    return (
      <PageWrapper>
        <Header textAlign='center' size='large'>Add widget</Header>
        <Container text>
          <Segment>
            <StepGroup size='small' fluid>
              <Step active={true}>
                <Icon name='language'/>
                <StepContent>
                  <StepTitle>Language</StepTitle>
                </StepContent>
              </Step>
              <Step>
                <Icon name='heading'/>
                <StepContent>
                  <StepTitle>Name</StepTitle>
                </StepContent>
              </Step>
            </StepGroup>
            <StyledForm error={true}>
              <div>[components]</div>
              <Message error>Some error message</Message>
            </StyledForm>
            <ButtonsWrapper>
              <Button negative basic icon='cancel' content='Cancel' onClick={this.onCancelClick.bind(this)}/>
              <Button secondary basic disabled={true} icon='step backward' content='Back'/>
              <Button secondary basic disabled={false} icon='step forward' content='Next'/>
              <Button primary basic disabled={true} icon='flag outline' content='Finish'/>
            </ButtonsWrapper>
          </Segment>
        </Container>
      </PageWrapper>
    );
  }
}

export const WidgetCreationWizardConnected = connect(
  (state) => state,
  {push}
)(WidgetCreationWizard);
