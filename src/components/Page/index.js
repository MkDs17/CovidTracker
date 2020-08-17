import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import _ from 'lodash';

import './page.scss';

import Cards from '../../containers/Page/Cards';
import Mac from './Mac';
import Map from './Map';
import EvolutionCurve from '../../containers/Page/EvolutionCurve';
import Yesterday from './Yesterday';

import { getThreeMostAffected, getPourcentageEvolution } from '../../utils/functions';

const Page = ({ countries, countriesOptions, activeCountry, statsData, globalStats, dailyStats, onLoadEvolutionStats, yesterdayStats, globalStatsWithCoordinates }) => {
  // Set Most Affected Countries stats 
  const [mostAffectedCountries, setmostAffectedCountries] = useState([]);
  // Set Active Range for Select a Range Componenet
  const [activeRange, setActiveRange] = useState('month');
  // Set Evolution  of Covid 
  const [activeEvolution, setActiveEvolution] = useState();

  const [loader, setLoaderStatement] = useState(true);

  useEffect(() => {
    if (globalStats != null && countries !== null) {
      const mac =(getThreeMostAffected(globalStats, countriesOptions));
      setmostAffectedCountries(mac);
    }

    onLoadEvolutionStats(2629743);
  }, [countries, globalStats]);

  useEffect(() => {
    setActiveEvolution(getPourcentageEvolution(globalStats, dailyStats, countries, activeCountry));
  }, [activeRange, dailyStats, activeCountry]);

  // Use effect for the loading Component
  useEffect(() => {
    if (!_.isEmpty(countries) & !_.isEmpty(countriesOptions) && !_.isEmpty(activeCountry) && !_.isEmpty(statsData) && !_.isEmpty(globalStats) && !_.isEmpty(dailyStats), !_.isEmpty(yesterdayStats)) {
      setLoaderStatement(false);
    }
  }, [countries, countriesOptions, activeCountry, statsData, globalStats, dailyStats, yesterdayStats]);

  return (
    <div id="page">
      <div className="page">

        { statsData !== undefined && (
          <>
            <div className="page-header">
              Stats in {activeCountry.name === 'Global' ? 'the World' : activeCountry.name}
            </div>
            <Cards
              stats={statsData}
              globalStats={globalStats}
              activeRange={activeRange}
              setActiveRange={setActiveRange}
              activeEvolution={activeEvolution}
              setActiveEvolution={setActiveEvolution}
            />

            { !_.isEmpty(yesterdayStats) && <Yesterday stats={yesterdayStats} /> }

            { !_.isEmpty(mostAffectedCountries) && <Mac stats={mostAffectedCountries} /> }

            <EvolutionCurve />

            { !_.isEmpty(globalStatsWithCoordinates) && <Map stats={globalStatsWithCoordinates} /> }
          </>
        )}

        <Dimmer active={loader}>
          <Loader>Please wait while loading data</Loader>
        </Dimmer>

      </div>
    </div>
  );
};

export default Page;
