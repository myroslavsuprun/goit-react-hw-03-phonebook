import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import {
  AddContactWrapper,
  Form,
  FormLabel,
  FormInput,
  FormButtonSubmit,
} from './AddContactFrom.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class AddContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <AddContactWrapper>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel htmlFor={this.nameInputId}>
            Name
            <FormInput
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              value={name}
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormLabel htmlFor={this.numberInputId}>
            Number
            <FormInput
              type="tel"
              name="number"
              placeholder="Enter phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.numberInputId}
              value={number}
              onChange={this.handleChange}
            />
          </FormLabel>
          <FormButtonSubmit>Add {name}</FormButtonSubmit>
        </Form>
      </AddContactWrapper>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddContactForm;
