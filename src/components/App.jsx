import React, { Component } from 'react';

import AddContactForm from './AddContactForm/AddContactForm';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

class App extends Component {
  #previousFilterSearch = '';

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

  onSubmit = contact => {
    const foundContact = this.state.contacts.find(contactFromState => {
      const currentContact = contactFromState.name.toLowerCase();
      return currentContact === contact.name.toLowerCase();
    });

    if (foundContact) return alert(`${contact.name} is already in contacts`);

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, contact],
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        this.filterContactsBySearch(this.#previousFilterSearch);
      }
    );
  };

  onContactDelete = contactName => {
    const newContacts = this.state.contacts.filter(contact => {
      if (contactName === contact.name) return false;
      else return true;
    });
    this.setState(
      {
        contacts: newContacts,
      },
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        this.filterContactsBySearch(this.#previousFilterSearch);
      }
    );
  };

  filterContactsBySearch = filter => {
    const filteredContacts = this.state.contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      return contactName.includes(filter.toLowerCase());
    });
    this.setState(() => ({
      filter: filteredContacts,
    }));
    this.#previousFilterSearch = filter;
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <AddContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactsFilter filterFunc={this.filterContactsBySearch} />
          <ContactsList
            contacts={filter ? filter : contacts}
            onDeleteClick={this.onContactDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
