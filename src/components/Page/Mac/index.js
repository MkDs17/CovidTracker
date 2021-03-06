import React from 'react';
import { Card } from 'semantic-ui-react';

import './mac.scss';

import MacCard from './MacCard';

function App({ stats }) {
  return (
    <div id="mac">
      <div className="mac">
        <div className="mac-title">
          <h2><span> Most Affected Countries</span></h2>
        </div>
          <div className="mac-content">
            <Card.Group centered>
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
