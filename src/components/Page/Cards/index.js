import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';

import './cards.scss';

import CardCustom from './CardCustom';

const Cards = ({ stats }) => {

  return (
    <div id="cards">
      <div className="cards">
        <Card.Group>
          <CardCustom 
            title={'Confirmed'} 
            data={stats.confirmed} 
            lastUpdate={stats.lastUpdate} 
            content={'Number of active cases of COVID-19'}
            color={'orange'}
          />
          <CardCustom 
            title={'Recovered'} 
            data={stats.recovered} 
            lastUpdate={stats.lastUpdate} 
            content={'Number of recoveries from COVID-19'}
            color={'green'}
          />
          <CardCustom 
            title={'Deaths'} 
            data={stats.deaths} 
            lastUpdate={stats.lastUpdate}
            content={'Number of deaths caused by COVID-19'}
            color={'red'}
          />
        </Card.Group>
      </div>
    </div>
  );
};

export default Cards;
