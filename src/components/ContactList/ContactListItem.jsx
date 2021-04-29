import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactForm/index.module.css';
import style from './index.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <li key={id} className={style.item}>
        {name} : {number}
        <button className={styles.button} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
