import React, { useEffect, useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import CountUp from 'react-countup';

import './card-custom.scss';

const CardCustom = ({ title, data, lastUpdate, evolution, content, color }) => {

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>last update: {new Date(lastUpdate).toLocaleDateString('en-US', dateOptions)} </Card.Meta>
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
        Evolution in one {evolution.range} : {evolution.pourcentage}
      </Card.Content>
      <Card.Content extra>
        {content}
      </Card.Content>
    </Card>
  );
};

export default CardCustom;
