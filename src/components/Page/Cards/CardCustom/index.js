import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Card, Image } from 'semantic-ui-react';
import CountUp from 'react-countup';

const CardCustom = ({ title, data, lastUpdate, evolution, range, content, color }) => {
  const evolutionStyle = classNames(
    'evolution',
    {
      'evolution-positive': evolution >= 0,
      'evolution-negative': evolution < 0,
    },
  );

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>
          <CountUp
            className="countup"
            end={data.value}
            duration={1}
            separator=" "
          />
        </Card.Description>
      </Card.Content>
      <Card.Content>
        Evolution in a {range} : 
        <span className={evolutionStyle}>
          <CountUp
            className="countup"
            end={evolution}
            duration={1}
            separator=" "
          />
          %
        </span>
      </Card.Content>
      <Card.Content extra>
        {content}
      </Card.Content>
    </Card>
  );
};

export default CardCustom;
