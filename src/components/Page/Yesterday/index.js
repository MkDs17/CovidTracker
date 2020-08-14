import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './yesterday.scss';

const Yesterday = ({ stats }) => (
  <div id="yesterday">
    <div className="yesterday">
      <Message icon info>
        <Icon name="info circle" />
        <Message.Content>
          <Message.Header>Yesterday</Message.Header>
          <div className="text">
            <p>We counted <span className="yesterday-number confirmed"> {stats.todayCases.toLocaleString('fr-FR')} </span> new confirmed cases, <span className="yesterday-number recovered"> {stats.todayRecovered.toLocaleString('fr-FR')} </span> recovered, and sadly <span className="yesterday-number deaths"> {stats.todayDeaths.toLocaleString('fr-FR')} </span> deaths.</p>
            <p>Be careful and take care.</p>
          </div>
        </Message.Content>
      </Message>
    </div>
  </div>
);

Yesterday.propTypes = {
  stats: PropTypes.shape({
    todayCases: PropTypes.number,
    todayRecovered: PropTypes.number,
    todayDeaths: PropTypes.number,
  }).isRequired,
};

export default Yesterday;
