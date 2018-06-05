import React from 'react';

import SortPanel from 'containers/SortPanel';
import FilmDetailed from 'components/FilmDetailed';

export default function Film() {
  return (
    <div>
      <FilmDetailed filmTitle="DJANGO UNCHAINED" releaseDate="2012" filmGenre="Adventure" />
      <SortPanel />
    </div>
  );
}
