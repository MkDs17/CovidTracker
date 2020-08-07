// --- initial state
const initialState = {
  countries: null,
  statsData: null,
  globalStats: null,
  dailyStats: null,
};

// --- action types
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';
const UPDATE_COUNTRIES_ARRAY = 'UPDATE_COUNTRIES_ARRAY';

export const FETCH_STATS_DATA = 'FETCH_STATS_DATA';
const UPDATE_STATS_DATA = 'UPDATE_STATS_DATA';


export const FETCH_GLOBAL_STATS_DATA = 'FETCH_GLOBAL_STATS_DATA';
const UPDATE_GLOBAL_STATS_DATA = 'UPDATE_GLOBAL_STATS_DATA';

export const FETCH_EVOLUTION_STATS = 'FETCH_EVOLUTION_STATS';
const UPDATE_EVOLUTION_STATS = 'UPDATE_EVOLUTION_STATS';


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_COUNTRIES_ARRAY:
      return {
        ...state,
        countries: action.value,
      };

    case UPDATE_STATS_DATA:
      return {
        ...state,
        statsData: action.value,
      };

    case UPDATE_GLOBAL_STATS_DATA:
      return {
        ...state,
        globalStats: action.value,
      };

    case UPDATE_EVOLUTION_STATS:
      return {
        ...state,
        dailyStats: action.value,
      };

    default: return state;
  }
};

// --- action creators

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
})
export const updateCountriesArray = ( value ) => ({
  type: UPDATE_COUNTRIES_ARRAY,
  value,
})

export const fetchCountryData = ( value ) => ({
  type: FETCH_COUNTRY_DATA,
  value,
})

export const fetchStatsData = () => ({
  type: FETCH_STATS_DATA,
})
export const updateStatsData = ( value ) => ({
  type: UPDATE_STATS_DATA,
  value,
})

export const fetchGlobalStatsData = () => ({
  type: FETCH_GLOBAL_STATS_DATA,
})
export const updateGLobalStatsData = ( value ) => ({
  type: UPDATE_GLOBAL_STATS_DATA,
  value,
})

export const fetchEvolutionStats = ( value) => ({
  type: FETCH_EVOLUTION_STATS,
  value,
})
export const updateEvolutionStats = ( value ) => ({
  type: UPDATE_EVOLUTION_STATS,
  value,
})

// --- export
export default reducer;
