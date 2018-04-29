import React from 'react';
import PropTypes from 'prop-types';

function Label(props) {
  return (
    <label className={props.className}>{props.value}</label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

export default Label;