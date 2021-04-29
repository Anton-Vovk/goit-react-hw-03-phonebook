import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactForm/index.module.css';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label className={styles.label}>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Search name"
          value={filter}
          className={styles.input}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
};

export default Filter;
