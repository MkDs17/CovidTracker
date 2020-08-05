import React, { useEffect, useState } from 'react';
import { Select } from 'semantic-ui-react';

import './page.scss';

import Cards from './Cards';

const Page = ({ countries, statsData, onLoadStatsCountry, fetchStatsData }) => {
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [activeCountry, setActiveCountry] = useState('GLO');
  const [activeCountryName, setActiveCountryName] = useState('Global');

  useEffect(() => {
    let countriesArray = [{
      key: 'GLO',
      value: 'GLO',
      text: 'Global'
    }];

    countries.map((country) => {
      const data = {
        key: country.iso3,
        value: country.iso3,
        text: country.name,
      }
      countriesArray.push(data);
    })

    setCountriesOptions(countriesArray);

  }, [countries]);

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
              <Cards stats={statsData} />
            </>
          )
        }

      </div>
    </div>
  );
};

export default Page;
