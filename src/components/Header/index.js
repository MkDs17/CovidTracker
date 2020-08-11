import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, Select } from 'semantic-ui-react';

import './header.scss';

import { getNameOfActiveCountry } from '../../utils/functions';

const Header = ({
  countries, activeCountry, countriesOptions,
  onSetCountriesOptions, onSetActiveCountry, onLoadStatsCountry, fetchStatsData,
}) => {
  useEffect(() => {
    const countriesArray = [{
      key: 'GLO',
      value: 'GLO',
      text: 'Global',
    }];

    if (countries !== null) {
      countries.map((country) => {
        const data = {
          key: country.iso3,
          value: country.iso3,
          text: country.name,
        };
        return countriesArray.push(data);
      });
    }

    onSetCountriesOptions(countriesArray);
  }, [countries]);

  const loadStatsCountry = (data) => {
    // Set the redux state
    onSetActiveCountry({
      iso: data,
      name: getNameOfActiveCountry(countriesOptions, data),
    });

    if (data === 'GLO') {
      fetchStatsData();
    }
    else {
      onLoadStatsCountry(data);
    }
  };

  return (
    <div id="header">
      <Menu>
        <Menu.Item>
          Covid Tracker
        </Menu.Item>
        <Menu.Item className="menu-dropdown-item" position="right">
          <Select 
            placeholder="Select a country"
            options={countriesOptions}
            defaultValue={activeCountry.iso}
            onChange={(e, data) => {
              loadStatsCountry(data.value);
            }}
          />
        </Menu.Item>
      </Menu>
    </div>
  );
};

Header.propTypes = {
  // TODO => set default value for missing value of this array
  /* countries: PropTypes.arrayOf(
    PropTypes.shape({
      iso2: PropTypes.string.isRequired,
      iso3: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired, */
  activeCountry: PropTypes.shape({
    iso: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  // TODO => set default value for missing value of this array
  /* countriesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired, */
  onSetCountriesOptions: PropTypes.func.isRequired,
  onSetActiveCountry: PropTypes.func.isRequired,
  onLoadStatsCountry: PropTypes.func.isRequired,
  fetchStatsData: PropTypes.func.isRequired,
};

export default Header;
