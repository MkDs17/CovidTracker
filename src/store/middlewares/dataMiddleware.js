import axios from 'axios';
import { FETCH_COUNTRIES, updateCountriesArray, FETCH_STATS_DATA, updateStatsData, FETCH_COUNTRY_DATA, FETCH_GLOBAL_STATS_DATA, updateGLobalStatsData } from '../reducer/data';

const dataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {

      axios({
        method: 'get',
        url: 'https://covid19.mathdro.id/api/countries',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateCountriesArray(response.data.countries));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case FETCH_STATS_DATA: {

      axios({
        method: 'get',
        url: 'https://covid19.mathdro.id/api/',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log(response)
          store.dispatch(updateStatsData(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case FETCH_GLOBAL_STATS_DATA: {

      axios({
        method: 'get',
        url: 'https://covid19.mathdro.id/api/confirmed',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log(response)
          store.dispatch(updateGLobalStatsData(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case FETCH_COUNTRY_DATA: {

      axios({
        method: 'get',
        url: `https://covid19.mathdro.id/api/countries/${action.value}` ,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateStatsData(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }
    
    default: {
      next(action);
    }
  }
};

export default dataMiddleware;
