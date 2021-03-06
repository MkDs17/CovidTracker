import axios from 'axios';
import { FETCH_COUNTRIES, updateCountriesArray, FETCH_STATS_DATA, updateStatsData, FETCH_COUNTRY_DATA, FETCH_GLOBAL_STATS_DATA, updateGLobalStatsData, FETCH_EVOLUTION_STATS, updateEvolutionStats, FETCH_DAILY_SUMMARY, updateDailySummary, FETCH_YESTERDAY_STATS, updateYesterdayStats, FETCH_GLOBAL_STATS_DATA_WITH_COORDINATES, updateGLobalStatsDataWithCoordinates } from '../reducer/data';

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
          store.dispatch(updateGLobalStatsData(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case FETCH_GLOBAL_STATS_DATA_WITH_COORDINATES: {
      axios({
        method: 'get',
        url: 'https://corona.lmao.ninja/v2/jhucsse',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateGLobalStatsDataWithCoordinates(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }


    case FETCH_COUNTRY_DATA: {
      axios({
        method: 'get',
        url: `https://covid19.mathdro.id/api/countries/${action.value}`,
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

    case FETCH_DAILY_SUMMARY: {
      axios({
        method: 'get',
        url: 'https://covid19.mathdro.id/api/daily',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateDailySummary(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });
      break;
    }

    case FETCH_EVOLUTION_STATS: {
      const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

      // Get timestamp for Now
      const actualTimestamp = Math.floor(Date.now() / 1000.0);

      // Get timestamp to period searched
      const searchedTimeStamp = actualTimestamp - action.value;

      // Get date format via timestamp
      const getFinalDate = new Date(searchedTimeStamp * 1000).toLocaleString('en-EN', dateOptions);

      // Format date to correspond to api url
      const formatDate = getFinalDate.replace(/\//g, '-');

      const urlEnding = formatDate;

      axios({
        method: 'get',
        url: `https://covid19.mathdro.id/api/daily/${urlEnding}`,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateEvolutionStats(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        });

      break;
    }

    case FETCH_YESTERDAY_STATS: {
      const {
        iso,
      } = store.getState().data.activeCountry;
      const query = iso === 'GLO' ? 'https://corona.lmao.ninja/v2/all?yesterday=' : `https://corona.lmao.ninja/v2/countries/${iso}?yesterday=true&strict=true&query `;

      axios({
        method: 'get',
        url: query,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateYesterdayStats(response.data));
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
