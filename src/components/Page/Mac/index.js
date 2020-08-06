import React from 'react';

import './mac.scss';

import MacCard from './MacCard';

function App({ stats }) {

  console.log('stats into component', stats);

  return (
    <div id="mac">
      <div className="mac">
        <div className="mac-title">Most Affected Countries</div>
          <div className="mac-content">
            {
              stats.map((object, i) => {
                return (
                  <MacCard stat={object} key={i} numb={i} />
                )
              })
            }
          </div>
      </div>
    </div>
  );
}

export default App;
