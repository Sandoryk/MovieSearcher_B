/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import SearchPanel from 'containers/SearchPanel';
import SortPanel from 'containers/SortPanel';
// import FilmThumbnail from 'components/FilmThumbnail';
import FilmDetailed from 'components/FilmDetailed';

export default function App() {
  return (
    <div className="app">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <SearchPanel value="Quentin Tarantino" />
      <SortPanel />
      {/* <FilmThumbnail filmTitle='DJANGO UNCHAINED' releaseDate='2012' filmGenre='Adventure'/> */}
      <FilmDetailed filmTitle="DJANGO UNCHAINED" releaseDate="2012" filmGenre="Adventure" />
      {/* <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch> */}
      <Footer />
    </div>
  );
}
