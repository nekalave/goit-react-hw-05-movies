import React, { Component } from 'react';
import Section from '../Section/Section';
import AddContact from './AddContact/AddContact';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class PhonebookPage extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const duplicateContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
        name: '',
        number: ''
      }));
    }
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Section title='Phonebook'>
          <AddContact name={name}
                      number={number}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit} />
        </Section>
        <Section title='Contacts'>
          <Filter filter={filter}
                  handleChange={this.handleChange}
          />
          <ContactsList contacts={filteredContacts} handleDeleteContact={this.handleDeleteContact}/>
        </Section>
      </>
    );
  }
}

export default PhonebookPage;
