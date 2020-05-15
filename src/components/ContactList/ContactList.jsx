import React from 'react';
import PropTypes from 'prop-types';
// Components
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => (
  contacts.length > 0 && (
    <ul>
      {contacts.map((item) => {
        const { name, id, number } = item;
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
