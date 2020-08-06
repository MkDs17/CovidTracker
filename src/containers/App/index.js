import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchCountries, fetchStatsData, fetchGlobalStatsData } from '../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
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
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
