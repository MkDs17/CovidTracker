import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';
import Page from '../../containers/Page';

function App({
  fetchCountries,
  fetchStatsData,
  fetchGlobalStatsData,
  fetchDailySummary,
  fetchYesterdayStats,
  activeCountry,
  fetchGlobalStatsDataWithCoordinates,
}) {
  useEffect(() => {
    fetchCountries();
    fetchStatsData();
    fetchGlobalStatsData();
    fetchDailySummary();
    fetchGlobalStatsDataWithCoordinates();
  }, []);

  useEffect(() => {
    fetchYesterdayStats();
  }, [activeCountry]);

  return (
    <div id="app">
      <Header />
      <Switch>
        <Route path="/">
          <Page />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  fetchCountries: PropTypes.func.isRequired,
  fetchStatsData: PropTypes.func.isRequired,
  fetchGlobalStatsData: PropTypes.func.isRequired,
  fetchDailySummary: PropTypes.func.isRequired,
  fetchYesterdayStats: PropTypes.func.isRequired,
};

export default App;
