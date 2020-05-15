import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Filter = ({ value, onChangeFilter, contactListLength }) => {
  const filterInputId = uuidv4();
  return (
    contactListLength >= 2 && (
      <>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <input
          type="text"
          id={filterInputId}
          placeholder="Enter contact name..."
          value={value}
          onChange={onChangeFilter}
        />
      </>)
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  contactListLength: PropTypes.number.isRequired,
};

export default Filter;
