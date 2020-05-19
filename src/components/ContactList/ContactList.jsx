import React from 'react';
import PropTypes from 'prop-types';
// Components
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => (
  contacts.length > 0 && (
    <ul>
      {contacts.map((contact) => {
        const { name, id, number } = contact;
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  )
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
