import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';
import Caption from 'components/Caption';
import image from '../FilmThumbnail/django.jpg';

const FilmDetailed = (props) => (
  <div className="film-thumbnail-width">
    <Img className="film-thumbnail film-thumbnail-width" src={image} />
    <div>
      <Caption value={props.filmTitle} />
      <Caption className="float-right border-solid" value={props.releaseDate} />
    </div>
    <Caption className="font-size-little" value={props.filmGenre} />
  </div>
);

FilmDetailed.propTypes = {
  filmTitle: PropTypes.string,
  releaseDate: PropTypes.string,
  filmGenre: PropTypes.string,
};

export default FilmDetailed;
