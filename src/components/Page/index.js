import React, { useEffect, useState } from 'react';
import { Select } from 'semantic-ui-react';
import _ from 'lodash';

import './page.scss';

import Cards from '../../containers/Page/Cards';
import Mac from './Mac';

import { getThreeMostAffected, getPourcentageEvolution, getNameOfActiveCountry } from '../../utils/functions';

const Page = ({ countries, activeCountry, statsData, globalStats, dailyStats, fetchStatsData, onSetActiveCountry, onLoadStatsCountry, onLoadEvolutionStats }) => {
  // Set countries options for the Select a Country Component
  const [countriesOptions, setCountriesOptions] = useState([]);
  // Set Active country to show data only for this country
  const [activeCountryName, setActiveCountryName] = useState('Global');
  // Set Most Affected Countries stats 
  const [mostAffectedCountries, setmostAffectedCountries] = useState([]);
  // Set Active Range for Select a Range Componenet
  const [activeRange, setActiveRange] = useState('month');
  // Set Evolution  of Covid 
  const [activeEvolution, setActiveEvolution] = useState();

  useEffect(() => {
    let countriesArray = [{
      key: 'GLO',
      value: 'GLO',
      text: 'Global'
    }];

    if (countries !== null) {
      countries.map((country) => {
        const data = {
          key: country.iso3,
          value: country.iso3,
          text: country.name,
        }
        countriesArray.push(data);
      })
    }

    setCountriesOptions(countriesArray);

    if (globalStats != null & countries !== null ) {
      let mac =(getThreeMostAffected(globalStats, countriesOptions));
      setmostAffectedCountries(mac);
    }

    onLoadEvolutionStats(2629743)

  }, [countries, globalStats]);

  useEffect(() => {
    setActiveEvolution(getPourcentageEvolution(globalStats, dailyStats, countries, activeCountry))
    
  }, [activeRange, dailyStats, activeCountry])

  const loadStatsCountry = (data) => {
    // Set the redux state
    onSetActiveCountry({
      iso: data,
      name: getNameOfActiveCountry(countriesOptions, data),
    })

    if (data === 'GLO') {
      fetchStatsData();
    } else {
      onLoadStatsCountry(data);
    }
  }
  
  return (
    <div id="page">
      <div className="page">
        
        <div className="page-select">
          <Select 
            placeholder='Select a country' 
            options={countriesOptions} 
            defaultValue={activeCountry.iso}
            onChange={(e, data) => {
              loadStatsCountry(data.value)
            }}
          />
        </div>

        { statsData != undefined && 
          (
            <>
              <div className="page-header">
                Stats in {activeCountry.name === 'Global' ? 'The World' : activeCountry.name}
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
            </>
          )
        }

      </div>
    </div>
  );
};

export default Page;
