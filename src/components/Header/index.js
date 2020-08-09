import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Select } from 'semantic-ui-react';

import './header.scss';

import { getNameOfActiveCountry } from '../../utils/functions';

const Header = ({ countries, activeCountry, countriesOptions, onSetCountriesOptions, onSetActiveCountry, onLoadStatsCountry, fetchStatsData}) => {
  // Set Active country to show data only for this country
  const [activeCountryName, setActiveCountryName] = useState('Global');

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

    onSetCountriesOptions(countriesArray);

  }, [countries]);

  const loadStatsCountry = (data) => {
    // Set the redux state
    console.log('data', data)
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
    <div id="header">
      <Menu>
        <Menu.Item>
          Covid Tracker
        </Menu.Item>
        <Menu.Item className="menu-dropdown-item" position="right">
          <Select 
            placeholder='Select a country' 
            options={countriesOptions} 
            defaultValue={activeCountry.iso}
            onChange={(e, data) => {
              loadStatsCountry(data.value)
            }}
          />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
