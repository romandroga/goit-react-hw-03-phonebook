import React, { Component } from 'react';
// Components
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// Utilities
import { filterContacts } from '../utilities';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
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
