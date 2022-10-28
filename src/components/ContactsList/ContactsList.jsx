import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import {
  ContactsListTag,
  ContactsItem,
  ContactsButton,
} from './ContactsList.styled';

class ContactsList extends Component {
  handleDeleteClick = contactName => {
    this.props.onDeleteClick(contactName);
  };

  render() {
    let { contacts } = this.props;

    const mapCallback = contact => (
      <ContactsItem key={nanoid()}>
        {contact.name} {contact.number}
        <ContactsButton onClick={e => this.handleDeleteClick(contact.name)}>
          Delete
        </ContactsButton>
      </ContactsItem>
    );

    return <ContactsListTag>{contacts.map(mapCallback)}</ContactsListTag>;
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactsList;
