import React from 'react';
import PropTypes from 'prop-types';

const Caption = (props) => (
  <span className={props.className}>{props.value}</span>
);


Caption.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

export default Caption;
