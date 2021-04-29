import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class ContactForm extends Component {
  initialState = {
    name: '',
    number: '',
  };
  state = {
    name: '',
    number: '',
  };
  submitHandler = event => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.addPhonebook(contact);
    this.setState({ ...this.initialState });
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <label className={styles.label}>
            {' '}
            Name
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              className={styles.input}
            ></input>
          </label>
          <label className={styles.label}>
            {' '}
            Number
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="111-11-11"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              className={styles.input}
            ></input>
          </label>
          <button className={styles.button} type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addPhonebook: PropTypes.func.isRequired,
};

export default ContactForm;
