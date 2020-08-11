import React, { useEffect, useState } from 'react';
import { Card, Select} from 'semantic-ui-react';

import './cards.scss';

import CardCustom from './CardCustom';

const Cards = ({ stats, onLoadEvolutionStats, activeRange, setActiveRange, activeEvolution }) => {

  const rangeOptions = [
    /* { key: 'day', value: 'day', text: 'day' }, */
    { key: 'week', value: 'week', text: 'week' },
    { key: 'month', value: 'month', text: 'month' },
  ]

  const onSelectChange = (data) => {
    // Permet d'afficher le nom de l'option séléctionnée
    setActiveRange(data)

    switch(data) {
      /* case 'day':
        onLoadEvolutionStats(86400)
        break; */
      case 'week':
        onLoadEvolutionStats(604800)
        break;
      case 'month':
        onLoadEvolutionStats(2629743)
        break;
    }
  }

  return (
    <div id="cards">
      <div className="cards">
        <div className="cards-select">
          Evolution in a
          <Select 
            placeholder='Select a range' 
            options={rangeOptions} 
            defaultValue={activeRange}
            onChange={(e, data) => {
              onSelectChange(data.value)
            }}
          />
        </div>
        { activeEvolution !== undefined &&
        <Card.Group centered>
          <CardCustom 
            title={'Confirmed'} 
            data={stats.confirmed} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution.confirmed}
            range={activeRange}
            content={'Number of active cases of COVID-19'}
            color={'orange'}
          />
          <CardCustom 
            title={'Recovered'} 
            data={stats.recovered} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution.recovered}
            range={activeRange}
            content={'Number of recoveries from COVID-19'}
            color={'green'}
          />
          <CardCustom 
            title={'Deaths'} 
            data={stats.deaths} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution.deaths}
            range={activeRange}
            content={'Number of deaths caused by COVID-19'}
            color={'red'}
          />
        </Card.Group>
        }
      </div>
    </div>
  );
};

export default Cards;
