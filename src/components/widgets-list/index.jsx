import React from 'react';
import {connect} from 'react-redux';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListContent from 'semantic-ui-react/dist/commonjs/elements/List/ListContent';
import ListDescription from 'semantic-ui-react/dist/commonjs/elements/List/ListDescription';
import ListHeader from 'semantic-ui-react/dist/commonjs/elements/List/ListHeader';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import {createRemoveWidgetAction} from '../../actions/action-creators';
import {getLanguageTitle} from '../../selectors/languages';
import {getWidgetsList} from '../../selectors/widgets';

class WidgetsList extends React.Component {
  onRemoveWidgetClick(id) {
    this.props.removeWidget(id);
  }

  renderItems() {
    if (this.props.list.length === 0) {
      return (
        <Message info>
          No widgets yet.
        </Message>
      );
    }
    return this.props.list.map((widget) => (
      <ListItem key={widget.id}>
        <ListContent floated='right'>
          <Button
            compact basic negative
            size='small'
            icon='remove'
            content='Remove'
            onClick={() => this.onRemoveWidgetClick(widget.id)}
          />
        </ListContent>
        <ListContent>
          <ListHeader>{widget.name}</ListHeader>
          <ListDescription>{getLanguageTitle(widget.languageCode)}</ListDescription>
        </ListContent>
      </ListItem>
    ))
  }

  render() {
    return (
      <List relaxed>
        {this.renderItems()}
      </List>
    );
  }
}

export const WidgetsListConnected = connect(
  (state) => ({
    list: getWidgetsList(state)
  }),
  {
    removeWidget: createRemoveWidgetAction
  }
)(WidgetsList);
