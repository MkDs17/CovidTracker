import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

import './evolution-curve.scss';

import { chartsLineDatas } from '../../../utils/functions';

function EvolutionCurve({ dailySummary }) {
  const [chartLineDatas, setChartLineDatas] = useState([]);

  useEffect(() => {
    {!_.isEmpty(dailySummary) && setChartLineDatas(chartsLineDatas(dailySummary));}
  }, [dailySummary]);

  return (
    <div id="evolution-curve">
      <div className="evolution-curve">
        <div className="evolution-curve-title">
          <h2><span>Evolution Curves</span> </h2>
        </div>
        <div className="evolution-curve-content">
          { !_.isEmpty(chartLineDatas)
            && <Line data={chartLineDatas} /> }
        </div>
      </div>
    </div>
  );
}

export default EvolutionCurve;
