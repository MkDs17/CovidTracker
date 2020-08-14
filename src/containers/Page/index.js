import { connect } from 'react-redux';

import Page from '../../components/Page';

import { fetchCountryData, fetchStatsData, fetchEvolutionStats, setActiveCountry } from '../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    countries: state.data.countries,
    activeCountry: state.data.activeCountry,
    statsData: state.data.statsData,
    globalStats: state.data.globalStats,
    dailyStats: state.data.dailyStats,
    countriesOptions: state.data.countriesOptions,
    yesterdayStats: state.data.yesterdayStats,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadStatsCountry: (value) => {
    const action = fetchCountryData(value);
    dispatch(action);
  },
  fetchStatsData: () => {
    const action = fetchStatsData();
    dispatch(action);
  },
  onLoadEvolutionStats: (value) => {
    const action = fetchEvolutionStats(value);
    dispatch(action);
  },
  onSetActiveCountry: (value) => {
    const action = setActiveCountry(value);
    dispatch(action);
  },
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;
