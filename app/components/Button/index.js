/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className} onClick={(props.onClick)}>{props.caption}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
