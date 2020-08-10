import { connect } from 'react-redux';

import EvolutionCurve from '../../../components/Page/EvolutionCurve';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    dailySummary: state.data.dailySummary,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const EvolutionCurveContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EvolutionCurve);

export default EvolutionCurveContainer;
