import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import _ from 'lodash';

import './map.scss';

import dataExample from '../../../data/countriesDB.json';

const options = [{
  name: 'Confirmed',
  description: 'Estimated confirmed cases',
  property: 'confirmed',
  stops: [
    [0, '#fff3e0'],
    [10000, '#ffe0b2'],
    [50000, '#ffcc80'],
    [100000, '#ffb74d'],
    [500000, '#ffa726'],
    [1000000, '#ff9800'],
    [2500000, '#fb8c00'],
    [5000000, '#f57c00'],
    [10000000, '#ef6c00'],
  ],
}, {
  name: 'Deaths',
  description: 'Estimate deaths',
  property: 'deaths',
  stops: [
    [0, '#ffebee'],
    [1000, '#ffcdd2'],
    [5000, '#ef9a9a'],
    [10000, '#e57373'],
    [50000, '#ef5350'],
    [100000, '#f44336'],
    [250000, '#e53935'],
    [5000000, '#d32f2f'],
    [10000000, '#c62828'],
  ],
}, {
  name: 'Recovered',
  description: 'Estimate recovered',
  property: 'recovered',
  stops:  [
    [0, '#e8f5e9'],
    [10000, '#c8e6c9'],
    [50000, '#a5d6a7'],
    [100000, '#81c784'],
    [500000, '#66bb6a'],
    [1000000, '#4caf50'],
    [2500000, '#43a047'],
    [5000000, '#388e3c'],
    [10000000, '#2e7d32'],
  ],
  }
];

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const Map = ({ stats }) => {
  const mapRef = useRef();
  const [activeOptions, setActiveOptions] = useState(options[0]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [2.294919, 48.858001],
      zoom: 2,
    });

    const setFill = () => {
      const { property, stops } = activeOptions;
      map.setPaintProperty('countries', 'fill-color', {
        property,
        stops,
      });
    };

    /* const dataGeoJson = {
      type: 'FeatureCollection',
      features: stats.map((item, i) => (
        {
          id: i,
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [item.coordinates.longitude, item.coordinates.latitude],
          },
          properties: {
            title: item.country,
            confirmed: item.stats.confirmed,
            deaths: item.stats.deaths,
          },
        }
      )),
    }; */


    const data = {
      type: 'FeatureCollection',
      features: [
        ...stats,
      ],
    };

    const searchOne = data.features.filter((country) => {
      console.log('country', country);
      return (
      country.properties.adm0_a3 === 'USA'
      )
    })
    console.log('searchOne', searchOne);


    console.log('data', data);
    console.log('dataExample', dataExample);

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.on('load', () => {
      map.addSource('countries', {
        type: 'geojson',
        data,
      });

      map.addLayer({
        id: 'countries',
        type: 'fill',
        source: 'countries',
      }, 'country-label-lg'); // ID metches `mapbox/streets-v9`

      setFill();
    });
  }, [activeOptions]);

  const { name, description, stops, property } = activeOptions;
  const renderLegendKeys = (stop, i) => (
    <div key={i} className="txt-s">
      <span className="mr6 round-full w12 h12 inline-block align-middle" style={{ backgroundColor: stop[1] }} />
      <span>{`${stop[0].toLocaleString()}`}</span>
    </div>
  );

  const renderOptions = (option, i) => (
    <>
      <label key={i} className="toggle-container">
        <input onChange={() => setActiveOptions(options[i])} checked={option.property === property} name="toggle" type="radio" />
        <div className="toggle txt-s py3 toggle--active-white">{option.name}</div>
      </label>
    </>
  );

  return (
    <div id="map">
      <div className="map">
        <div ref={mapRef} className="map-container">
          <div className="toggle-group absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1">
            {options.map(renderOptions)}
          </div>
          <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180">
            <div className='mb6'>
              <h2 className="txt-bold txt-s block">{name}</h2>
              <p className='txt-s color-gray'>{description}</p>
            </div>
            {stops.map(renderLegendKeys)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
