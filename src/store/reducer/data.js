// --- initial state
const initialState = {
  countries: null,
  statsData: null,
  globalStats: null,
  dailyStats: null,
  activeCountry: {
    iso: 'GLO',
    name: 'Global',
  },
  countriesOptions: [],
} ;

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

const SET_ACTIVE_COUNTRY = 'SET_ACTIVE_COUNTRY'
const SET_ACTIVE_COUNTRY_NAME = 'SET_ACTIVE_COUNTRY_NAME'

const SET_COUNTRIES_OPTIONS = 'SET_COUNTRIES_OPTIONS'


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

    case SET_ACTIVE_COUNTRY:
      return {
        ...state,
        activeCountry: {
          iso: action.value.iso,
          name: action.value.name,
        },
      };

    case SET_COUNTRIES_OPTIONS:
      return {
        ...state,
        countriesOptions:  action.value,
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

export const setActiveCountry = ( value ) => ({
  type: SET_ACTIVE_COUNTRY,
  value,
})

export const setCountriesOptions = ( value ) => ({
  type: SET_COUNTRIES_OPTIONS,
  value,
})

// --- export
export default reducer;
