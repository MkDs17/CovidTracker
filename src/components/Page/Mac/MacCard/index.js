import React from 'react';
import { Card, Feed, Flag } from 'semantic-ui-react';
import CountUp from 'react-countup';

import './mac-card.scss';

function MacCard({ stat, numb }) {
  console.log('object', stat)
  console.log('numb', numb)
  return (
    <div id="mac-card">
      <div className="mac-card">
        {/* <div className="mac-card-title">
          {
            numb === 0 && 'Most Confirmed Case'
          }
          {
            numb === 1 && 'Most Deaths'
          }
          {
            numb === 2 && 'Most Recovered'
          }
        </div>
        <div className="mac-card-content">
          <div>{stat.first.name} : {stat.first.total}</div>
          <div>{stat.second.name} : {stat.second.total}</div>
          <div>{stat.third.name} : {stat.third.total}</div>
        </div> */}

        <Card>
          <Card.Content>
            <Card.Header>
              {
                numb === 0 && 'Most Confirmed Case'
              }
              {
                numb === 1 && 'Most Deaths'
              }
              {
                numb === 2 && 'Most Recovered'
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


      </div>
    </div>
  );
}

export default MacCard;
