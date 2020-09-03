import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import {WidgetsListConnected} from '../widgets-list';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

const HeadingWithButton = styled(Segment)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  
  & > .header {
    margin: 0 !important;
  }
`;

class WidgetsPage extends React.Component {
  onAddWidgetClick() {
    this.props.push('/add');
  }

  render() {
    return (
      <StyledContainer text>
        <Header size='large' textAlign='center'>Widgets Overview</Header>
        <Segment.Group>
          <HeadingWithButton>
            <Header>List of widgets</Header>
            <Button
              primary
              icon='plus'
              content='Add widget'
              onClick={this.onAddWidgetClick.bind(this)}
            />
          </HeadingWithButton>
          <Segment>
            <WidgetsListConnected />
          </Segment>
        </Segment.Group>
      </StyledContainer>
    );
  }
}

export const WidgetsPageConnected = connect(
  null, {push}
)(WidgetsPage);
