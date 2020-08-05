import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Header from '../Header';
import Page from '../../containers/Page';

function App({ fetchCountries, fetchStatsData }) {

  useEffect(() => {
    fetchCountries();
    fetchStatsData();
  }, [])

  return (
    <div id="app">
      <Header />
      <Switch>
        <Route path="/">
          <Page />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
