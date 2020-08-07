import { connect } from 'react-redux';

import Cards from '../../../components/Page/Cards';

import { fetchEvolutionStats } from '../../../store/reducer/data';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    dailyStats: state.data.dailyStats,
    countries: state.data.countries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadEvolutionStats: (value) => {
    const action = fetchEvolutionStats(value);
    dispatch(action);
  },
});

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards);

export default CardsContainer;
