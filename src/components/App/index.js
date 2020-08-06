import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Header from '../Header';
import Page from '../../containers/Page';

function App({ fetchCountries, fetchStatsData, fetchGlobalStatsData }) {

  useEffect(() => {
    fetchCountries();
    fetchStatsData();
    fetchGlobalStatsData();
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
