import React from 'react';
import PropTypes from 'prop-types';

import image from './django.jpg';
import Img from 'components/Img';
import Caption from 'components/Caption';

const FilmThumbnail = (props) => {
    return (
        <div>
            <Img className='film-thumbnail' src={image}/>
            <div>
                <Caption value={props.filmTitle}/>
                <Caption className='float-right' value={props.releaseDate}/>
            </div>
            <Caption value={props.filmGenre}/>
        </div>
      //<label className={props.className}>{props.value}</label>
    );
  }
  
//   Label.propTypes = {
//     className: PropTypes.string,
//     value: PropTypes.string
//   };

  export default FilmThumbnail;