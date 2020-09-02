import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import SegmentGroup from 'semantic-ui-react/dist/commonjs/elements/Segment/SegmentGroup';
import {WidgetsListConnected} from '../widgets-list';

class WidgetsPage extends React.Component {
  onAddWidgetClick() {
    this.props.push('/add');
  }

  render() {
    return (
      <Container text>
        <Header size='large'>Widgets Page</Header>
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
      </Container>
    );
  }
}

export const WidgetsPageConnected = connect(
  null, {push}
)(WidgetsPage);
