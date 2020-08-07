import React from 'react';
import { Card } from 'semantic-ui-react';

import './mac.scss';

import MacCard from './MacCard';

function App({ stats }) {

  console.log('stats into component', stats);

  return (
    <div id="mac">
      <div className="mac">
        <div className="mac-title">Most Affected Countries</div>
          <div className="mac-content">
            <Card.Group>
              {stats.map((object, i) => {
                return (
                  <MacCard stat={object} key={i} numb={i} />
                )
              })}
            </Card.Group>
          </div>
      </div>
    </div>
  );
}

export default App;
