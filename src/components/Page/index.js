import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import './page.scss';

import Cards from '../../containers/Page/Cards';
import Mac from './Mac';
import EvolutionCurve from '../../containers/Page/EvolutionCurve';

import { getThreeMostAffected, getPourcentageEvolution } from '../../utils/functions';

const Page = ({ countries, countriesOptions, activeCountry, statsData, globalStats, dailyStats, fetchStatsData, onLoadEvolutionStats }) => {
  // Set Most Affected Countries stats 
  const [mostAffectedCountries, setmostAffectedCountries] = useState([]);
  // Set Active Range for Select a Range Componenet
  const [activeRange, setActiveRange] = useState('month');
  // Set Evolution  of Covid 
  const [activeEvolution, setActiveEvolution] = useState();

  useEffect(() => {
    if (globalStats != null & countries !== null ) {
      let mac =(getThreeMostAffected(globalStats, countriesOptions));
      setmostAffectedCountries(mac);
    }

    onLoadEvolutionStats(2629743)
  }, [countries, globalStats]);

  useEffect(() => {
    setActiveEvolution(getPourcentageEvolution(globalStats, dailyStats, countries, activeCountry))
  }, [activeRange, dailyStats, activeCountry])

  return (
    <div id="page">
      <div className="page">

        { statsData !== undefined &&
          (
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
              
              { !_.isEmpty(mostAffectedCountries) && 
                <Mac stats={mostAffectedCountries} />
              }
               
              <EvolutionCurve />
            </>
          )
        }

      </div>
    </div>
  );
};

export default Page;
