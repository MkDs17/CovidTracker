import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import _ from 'lodash';

import './map.scss';

import data from './test.json';

const options = [{
  name: 'Confirmed',
  description: 'Estimated confirmed cases',
  property: 'confirmed',
  stops: [
    [0, '#f8d5cc'],
    [1000000, '#f4bfb6'],
    [5000000, '#f1a8a5'],
    [10000000, '#ee8f9a'],
    [50000000, '#ec739b'],
    [100000000, '#dd5ca8'],
    [250000000, '#c44cc0'],
    [500000000, '#9f43d7'],
    [1000000000, '#6e40e6'],
  ],
}, {
  name: 'Deaths',
  description: 'Estimate deaths',
  property: 'deaths',
  stops: [
    [0, '#f8d5cc'],
    [1000, '#f4bfb6'],
    [5000, '#f1a8a5'],
    [10000, '#ee8f9a'],
    [50000, '#ec739b'],
    [100000, '#dd5ca8'],
    [250000, '#c44cc0'],
    [5000000, '#9f43d7'],
    [10000000, '#6e40e6'],
  ],
}];

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


    
    
    for (const [key, value, i] of Object.entries(data)) {
      if (key === 'features') {
        console.log('value', value)
        console.log('i', i)
        //for (i = 0; i < )
        
        
        //console.log('value', value[i].properties);
        
        //interestData = _.findKey(value, { 'age': 1})
        
        /*  interestData = _.findKey(value, { 'age': 1})
        console.log('interestData', interestData); */
        /*
        for (const [key1, value1] of Object.entries(value)) {
          //console.log('value', value1)
        } */
      }
    }
    
    
    const dataGeoJson = stats.map((country, i) => {
    });



    console.log('dataGeoJson', dataGeoJson);

    console.log('data', data);
    console.log('stats', stats);

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.on('load', () => {
      map.addSource('countries', {
        type: 'geojson',
        data: dataGeoJson,
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
