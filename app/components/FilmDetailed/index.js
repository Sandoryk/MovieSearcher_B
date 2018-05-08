import React from 'react';
import PropTypes from 'prop-types';

import image from '../FilmThumbnail/django.jpg';
import Img from 'components/Img';
import Caption from 'components/Caption';

const FilmDetailed = (props) => {
    return (
        <div className='film-thumbnail-width'>
            <Img className='film-thumbnail film-thumbnail-width' src={image}/>
            <div>
                <Caption value={props.filmTitle}/>
                <Caption className='float-right border-solid' value={props.releaseDate}/>
            </div>
            <Caption className='font-size-little' value={props.filmGenre}/>
        </div>
    );
  }
  
//   Label.propTypes = {
//     value: PropTypes.string
//   };

  export default FilmDetailed;