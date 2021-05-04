import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  componentDidMount() {
    try {
      const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
      contactsFromStorage && this.setState({ contacts: contactsFromStorage });
    } catch {
      console.log('Invalid JSON');
    }
  }

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  addPhonebook = newContact => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prev => ({
          contacts: [...prev.contacts, newContact],
        }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const searchValue = filter.toLowerCase();
    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue),
      );
    } else {
      return contacts;
    }
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.filterContacts();
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm addPhonebook={this.addPhonebook} />
        <h2>Contacts</h2>
        <Filter filter={filter} inputHandler={this.inputHandler} />
        <ContactList
          filterContact={filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
