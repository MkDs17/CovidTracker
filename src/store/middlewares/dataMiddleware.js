import axios from 'axios';
import { FETCH_COUNTRIES, updateCountriesArray, FETCH_STATS_DATA, updateStatsData, FETCH_COUNTRY_DATA, FETCH_GLOBAL_STATS_DATA, updateGLobalStatsData, FETCH_EVOLUTION_STATS, updateEvolutionStats } from '../reducer/data';

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

    case FETCH_EVOLUTION_STATS: {

      const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
      
      /* const actualDate = new Date().toLocaleString('en-EN', dateOptions);
      const formatDate = actualDate.replace(/\//g, '-')
      console.log(formatDate) */

      const actualTimestamp = Date.now();
      console.log('actualTimestamp', actualTimestamp)
      
      var a = new Date(actualTimestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();

      var time = date + ' ' + month + ' ' + year ;
      
      console.log('a', a)
      console.log('date', date)
      console.log('time', time);


      let urlEnding = '';

      switch (action.value) {
        case 'day' :
          console.log('day in middleware')
          break;
        case 'week' :
          console.log('week in middleware')
          break;
        case 'month' :
          console.log('month in middleware')
          break;
      }

      //console.log('url', url)

      /* axios({
        method: 'get',
        url: `https://covid19.mathdro.id/api/countries/${action.value}` ,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          store.dispatch(updateStatsData(response.data));
        })
        .catch((error) => {
          console.log('Houston ? We got trouble', error);
        }); */

      break;
    }
    
    default: {
      next(action);
    }
  }
};

export default dataMiddleware;
