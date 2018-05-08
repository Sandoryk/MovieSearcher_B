import React from 'react';
import styled from 'styled-components';

import Banner from './movie_banner.jpg';

class BackgroundImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.style = {
      width: `${props.width}`,
      height: `${props.height}`,
      backgroundImage: `url(${Banner})`
    };
  }  
  render() {
      return (
        <div style={this.style}>{this.props.children}</div>
      );
    }
  }
  
  export default BackgroundImage;