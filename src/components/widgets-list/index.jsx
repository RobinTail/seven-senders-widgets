import React from 'react';
import {connect} from 'react-redux';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import {createCloseModalAction, createOpenModalAction, createRemoveWidgetAction} from '../../actions/action-creators';
import {getLanguageTitle} from '../../selectors/languages';
import {getCbOnConfirm, getIsModalOpen} from '../../selectors/modal';
import {getWidgetsList} from '../../selectors/widgets';

class WidgetsList extends React.Component {
  onRemoveWidgetClick(cbOnConfirm) {
    this.props.openModal(cbOnConfirm);
  }

  onConfirmRemoveWidgetClick() {
    this.props.modalCbOnConfirm();
    this.props.closeModal();
  }

  onCancelRemoveWidgetClick() {
    this.props.closeModal();
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
      <List.Item key={widget.id}>
        <List.Content floated='right'>
          <Button
            compact basic negative
            size='small'
            icon='remove'
            content='Delete'
            onClick={this.onRemoveWidgetClick.bind(this, () => {
              this.props.removeWidget(widget.id);
            })}
          />
        </List.Content>
        <List.Content>
          <List.Header>{widget.name}</List.Header>
          <List.Description>{getLanguageTitle(widget.languageCode)}</List.Description>
        </List.Content>
      </List.Item>
    ));
  }

  render() {
    return (
      <>
        <List relaxed>
          {this.renderItems()}
        </List>
        <Modal open={this.props.isModalOpen} size='small'>
          <Modal.Header>Delete widget</Modal.Header>
          <Modal.Content>Are you sure you want to delete this widget?</Modal.Content>
          <Modal.Actions>
            <Button
              secondary
              onClick={this.onCancelRemoveWidgetClick.bind(this)}
            >Cancel</Button>
            <Button
              negative
              onClick={this.onConfirmRemoveWidgetClick.bind(this)}
            >Delete</Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export const WidgetsListConnected = connect(
  (state) => ({
    list: getWidgetsList(state),
    isModalOpen: getIsModalOpen(state),
    modalCbOnConfirm: getCbOnConfirm(state)
  }),
  {
    removeWidget: createRemoveWidgetAction,
    openModal: createOpenModalAction,
    closeModal: createCloseModalAction
  }
)(WidgetsList);
