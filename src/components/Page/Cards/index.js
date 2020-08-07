import React, { useEffect, useState } from 'react';
import { Card, Select} from 'semantic-ui-react';

import './cards.scss';

import CardCustom from './CardCustom';

const Cards = ({ stats, onLoadEvolutionStats }) => {
  const [activeRange, setActiveRange] = useState('day');
  const [activeEvolution, setActiveEvolution] = useState({});

  useEffect(() => {
    const evolution = {
      pourcentage: '+ 18%',
      range: activeRange,
    };

    setActiveEvolution(evolution);
    
  }, [activeRange])

  const rangeOptions = [
    { key: 'day', value: 'day', text: 'a day' },
    { key: 'week', value: 'week', text: 'a week' },
    { key: 'month', value: 'month', text: 'a month' },
  ]

  const onSelectChange = (data) => {
    setActiveRange(data)
    onLoadEvolutionStats(data)
  }

  return (
    <div id="cards">
      <div className="cards">
        <div className="cards-select">
          <Select 
            placeholder='Select a range' 
            options={rangeOptions} 
            defaultValue={activeRange}
            onChange={(e, data) => {
              onSelectChange(data.value)
            }}
          />
        </div>
        
        <Card.Group>
          <CardCustom 
            title={'Confirmed'} 
            data={stats.confirmed} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution}
            content={'Number of active cases of COVID-19'}
            color={'orange'}
          />
          <CardCustom 
            title={'Recovered'} 
            data={stats.recovered} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution}
            content={'Number of recoveries from COVID-19'}
            color={'green'}
          />
          <CardCustom 
            title={'Deaths'} 
            data={stats.deaths} 
            lastUpdate={stats.lastUpdate}
            evolution={activeEvolution}
            content={'Number of deaths caused by COVID-19'}
            color={'red'}
          />
        </Card.Group>
      </div>
    </div>
  );
};

export default Cards;
