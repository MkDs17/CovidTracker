import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

import './map.scss';

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mikymaxxx/ckdvgpup4202f19o19qg33r3d',
      center: [2.294919, 48.858001],
      zoom: 3,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return (
    <div id="map">
      <div className="map">
        <div ref={mapRef} className="map-container" />
      </div>
    </div>
  );
};

export default Map;
