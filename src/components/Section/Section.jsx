import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SectionTag, Heading } from './Section.styled';

class Section extends Component {
  render() {
    const { title } = this.props;
    return (
      <SectionTag>
        {title && <Heading>{title}</Heading>}
        {this.props.children}
      </SectionTag>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
