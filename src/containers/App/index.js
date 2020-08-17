import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchCountries, fetchStatsData, fetchGlobalStatsData, fetchDailySummary, fetchYesterdayStats, fetchGlobalStatsDataWithCoordinates} from '../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    activeCountry: state.data.activeCountry,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCountries: () => {
    const action = fetchCountries();
    dispatch(action);
  },
  fetchStatsData: () => {
    const action = fetchStatsData();
    dispatch(action);
  },
  fetchGlobalStatsData: () => {
    const action = fetchGlobalStatsData();
    dispatch(action);
  },
  fetchDailySummary: () => {
    const action = fetchDailySummary();
    dispatch(action);
  },
  fetchYesterdayStats: () => {
    const action = fetchYesterdayStats();
    dispatch(action);
  },
  fetchGlobalStatsDataWithCoordinates: () => {
    const action = fetchGlobalStatsDataWithCoordinates();
    dispatch(action);
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
