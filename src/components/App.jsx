import React, { Component } from 'react';
// Components
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// Utilities
import { filterContacts } from '../utilities';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const previousContacts = localStorage.getItem('contacts');
    if (previousContacts) {
      this.setState({ contacts: JSON.parse(previousContacts) });
    }
  }

  addContact = contact => {
    const { contacts } = this.state;
    if (contacts.some(elem => elem.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(state => ({ contacts: [...state.contacts, contact] }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(elem => elem.id !== id),
    }));
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.changeFilter}
          contactListLength={contacts.length}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}
