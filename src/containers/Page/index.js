import { connect } from 'react-redux';

import Page from '../../components/Page';

import { fetchCountryData, fetchStatsData } from '../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    countries: state.data.countries,
    statsData: state.data.statsData,
    globalStats: state.data.globalStats,
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
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;
