import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FormLabel, FormInput } from './ContactsFilter.styled';

class ContactsFilter extends Component {
  filterInputId = nanoid();

  handleChange = e => {
    let currentValue = e.target.value;
    this.props.filterFunc(currentValue);
  };

  render() {
    const { filter } = this.props;
    return (
      <FormLabel htmlFor={this.filterInputId}>
        Find contacts by name
        <FormInput
          value={filter}
          type="text"
          name="filter"
          id={this.filterInputId}
          onChange={this.handleChange}
        />
      </FormLabel>
    );
  }
}

ContactsFilter.propTypes = {
  filterFunc: PropTypes.func.isRequired,
};

export default ContactsFilter;
