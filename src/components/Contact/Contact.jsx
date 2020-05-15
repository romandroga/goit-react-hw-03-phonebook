import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <li>
      <span>{name} : {number}</span>
      <button
        type="button"
        onClick={onDelete}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </li>);

};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
