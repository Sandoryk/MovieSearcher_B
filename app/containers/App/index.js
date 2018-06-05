/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FilmPage from 'containers/FilmPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div className="app">
      <Helmet
        titleTemplate="%s - Movie searcher"
        defaultTitle="Movie searcher"
      >
        <meta name="description" content="A Movie searcher application" />
      </Helmet>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/film" component={FilmPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
