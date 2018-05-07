/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Caption from 'components/Caption';
import SearchPanel from 'containers/SearchPanel';
import BackgroundImage from 'components/BackgroundImage';
import FilmThumbnail from 'components/FilmThumbnail';

export default function App() {
  return (
    <div className='app'>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <BackgroundImage/>
      <SearchPanel value='Quentin Tarantino'/>
      <FilmThumbnail filmTitle='DJANGO UNCHAINED' releaseDate='2012' filmGenre='Adventure'/>
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
