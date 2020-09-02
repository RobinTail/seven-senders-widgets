import React from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListContent from 'semantic-ui-react/dist/commonjs/elements/List/ListContent';
import ListDescription from 'semantic-ui-react/dist/commonjs/elements/List/ListDescription';
import ListHeader from 'semantic-ui-react/dist/commonjs/elements/List/ListHeader';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import {languages} from '../../constants/languages';
import {getWidgetsList} from '../../selectors/widgets';

class WidgetsList extends React.Component {
  renderItems() {
    if (this.props.list.length === 0) {
      return (
        <Message info>
          No widgets yet.
        </Message>
      );
    }
    return this.props.list.map((item) => (
      <ListItem key={item.id}>
        <ListContent floated='right'>
          <Button compact basic negative size='small' icon='remove' content='Remove'/>
        </ListContent>
        <ListContent>
          <ListHeader>{item.name}</ListHeader>
          <ListDescription>{languages[item.languageCode]}</ListDescription>
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
  })
)(WidgetsList);
