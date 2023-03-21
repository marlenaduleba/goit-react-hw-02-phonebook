import { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div >
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <ContactList />
        </Section>
      </div>
    );
  }
}


