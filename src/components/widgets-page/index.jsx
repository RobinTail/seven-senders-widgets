import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import SegmentGroup from 'semantic-ui-react/dist/commonjs/elements/Segment/SegmentGroup';
import {WidgetsListConnected} from '../widgets-list';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

class WidgetsPage extends React.Component {
  onAddWidgetClick() {
    this.props.push('/add');
  }

  render() {
    return (
      <StyledContainer text>
        <Header size='large' textAlign='center'>Widgets Page</Header>
        <SegmentGroup>
          <Segment textAlign='right'>
            <Button
              primary
              icon='plus'
              content='Add widget'
              onClick={this.onAddWidgetClick.bind(this)}
            />
          </Segment>
          <Segment>
            <WidgetsListConnected />
          </Segment>
        </SegmentGroup>
      </StyledContainer>
    );
  }
}

export const WidgetsPageConnected = connect(
  null, {push}
)(WidgetsPage);
