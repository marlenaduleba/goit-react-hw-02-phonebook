import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="">
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>Rosie Simpson</li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
        </ul>
      </div>
    );
  }
}

/* <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter />
  <ContactList />*/
