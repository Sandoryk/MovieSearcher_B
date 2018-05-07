import React from 'react';
import styled from 'styled-components';

import Banner from './movie_banner.jpg';

const BGIWrapper = styled.div`
    background-image: url({Banner});
    `;

class BackgroundImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <BGIWrapper/>
      );
    }
  }
  
  export default BackgroundImage;