import React from 'react';

import Img from './Img';
import Banner from './movie_banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="Movie searcher - Logo" />
      </div>
    );
  }
}

export default Header;
