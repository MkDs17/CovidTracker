import { connect } from 'react-redux';

import Header from '../../components/Header';

import { fetchCountryData, fetchStatsData, fetchEvolutionStats, setActiveCountry, setCountriesOptions } from '../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    countries: state.data.countries,
    activeCountry: state.data.activeCountry,
    countriesOptions: state.data.countriesOptions,
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
  onSetActiveCountry: (value) => {
    const action = setActiveCountry(value);
    dispatch(action);
  },
  onSetCountriesOptions: (value) => {
    const action = setCountriesOptions(value);
    dispatch(action);
  }
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
