import React, { useEffect, useState } from 'react';
import { Select } from 'semantic-ui-react';
import _ from 'lodash';

import './page.scss';

import Cards from '../../containers/Page/Cards';
import Mac from './Mac';

import { getThreeMostAffected } from '../../utils/functions';

const Page = ({ countries, statsData, globalStats, dailyStats, fetchStatsData, onLoadStatsCountry, onLoadEvolutionStats }) => {
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [activeCountry, setActiveCountry] = useState('GLO');
  const [activeCountryName, setActiveCountryName] = useState('Global');
  const [mostAffectedCountries, setmostAffectedCountries] = useState([]);

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

  const loadStatsCountry = (data) => {
    setActiveCountry(data);
    getNameOfActiveCountry(countriesOptions, data);

    if (data === 'GLO') {
      fetchStatsData();
    } else {
      onLoadStatsCountry(data);
    }
  }

  const getNameOfActiveCountry = (countries, activeCountry) => {
    let country = countries.find(country => country.value === activeCountry);
    setActiveCountryName(country.text);
  }
  
  return (
    <div id="page">
      <div className="page">
        
        <div className="page-select">
          <Select 
            placeholder='Select a country' 
            options={countriesOptions} 
            defaultValue={activeCountry}
            onChange={(e, data) => {
              loadStatsCountry(data.value)
            }}
          />
        </div>

        { statsData != undefined && 
          (
            <>
              <div className="page-header">
                Stats in {activeCountryName === 'Global' ? 'The World' : activeCountryName}
              </div>
              <Cards stats={statsData} globalStats={globalStats} />
              
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
