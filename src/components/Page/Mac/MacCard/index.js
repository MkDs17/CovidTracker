import React from 'react';
import { Card, Feed, Flag } from 'semantic-ui-react';
import CountUp from 'react-countup';

import './mac-card.scss';

function MacCard({ stat, numb }) {
  console.log('object', stat)
  console.log('numb', numb)

  const color = (numb) => {
    switch(numb) {
      case 0 :
        return 'orange';
        break;
      case 1 :
        return 'green';
        break;
      case 2 :
        return 'red';
        break
      default: 
        return 'blue';
    }
  }

  return (
    <Card color={color(numb)} >
      <Card.Content>
        <Card.Header>
          {
            numb === 0 && 'Most Confirmed Cases'
          }
          {
            numb === 1 && 'Most Recovered'
          }
          {
            numb === 2 && 'Most Deaths'
          }
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Flag name={stat.first.flag} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Date content={stat.first.name} />
              <Feed.Summary>
                <CountUp
                  className="countup"
                  end={stat.first.total}
                  duration={2}
                  separator=" "
                />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label>
              <Flag name={stat.second.flag} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Date content={stat.second.name} />
              <Feed.Summary>
                <CountUp
                  className="countup"
                  end={stat.second.total}
                  duration={2}
                  separator=" "
                />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          
          <Feed.Event>
            <Feed.Label>
              <Flag name={stat.third.flag} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Date content={stat.third.name} />
              <Feed.Summary>
                <CountUp
                  className="countup"
                  end={stat.third.total}
                  duration={2}
                  separator=" "
                />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

        </Feed>
      </Card.Content>
    </Card>
  );
}

export default MacCard;
