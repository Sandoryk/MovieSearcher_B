import React from 'react';

import SearchPanel from 'containers/SearchPanel';
import SortPanel from 'containers/SortPanel';
// import FilmThumbnail from 'components/FilmThumbnail';
import FilmDetailed from 'components/FilmDetailed';

export default function Home() {
  return (
    <div>
      <SearchPanel value="Quentin Tarantino" />
      <SortPanel />
      {/* <FilmThumbnail filmTitle='DJANGO UNCHAINED' releaseDate='2012' filmGenre='Adventure'/> */}
      <FilmDetailed filmTitle="DJANGO UNCHAINED" releaseDate="2012" filmGenre="Adventure" />
    </div>
  );
}
