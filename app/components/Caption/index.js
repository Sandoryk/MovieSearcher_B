import React from 'react';
import PropTypes from 'prop-types';

const Caption = (props) => {
  return (
    <span className={props.className}>
      <p>{props.value}</p>
    </span>
    );
}

Caption.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

export default Caption;