import React, { Component } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

export default class ContactList extends Component {
  render() {
    return (
      <div>
       {this.props.contacts.length > 0 && (
          <ul>
             {this.props.contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleClickDelete={this.props.handleClickDelete}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
