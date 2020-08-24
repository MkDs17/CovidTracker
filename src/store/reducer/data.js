// --- initial state
const initialState = {
  countries: null,
  statsData: null,
  globalStats: null,
  dailyStats: null,
  dailySummary: null,
  yesterdayStats: null,
  activeCountry: {
    iso: 'GLO',
    name: 'Global',
  },
  countriesOptions: [],
  globalStatsWithCoordinates: null,
};

// --- action types
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';
const UPDATE_COUNTRIES_ARRAY = 'UPDATE_COUNTRIES_ARRAY';

export const FETCH_STATS_DATA = 'FETCH_STATS_DATA';
const UPDATE_STATS_DATA = 'UPDATE_STATS_DATA';

export const FETCH_GLOBAL_STATS_DATA = 'FETCH_GLOBAL_STATS_DATA';
const UPDATE_GLOBAL_STATS_DATA = 'UPDATE_GLOBAL_STATS_DATA';

export const FETCH_GLOBAL_STATS_DATA_WITH_COORDINATES = 'FETCH_GLOBAL_STATS_DATA_WITH_COORDINATES';
const UPDATE_GLOBAL_STATS_DATA_WITH_COORDINATES = 'UPDATE_GLOBAL_STATS_DATA_WITH_COORDINATES';

export const FETCH_EVOLUTION_STATS = 'FETCH_EVOLUTION_STATS';
const UPDATE_EVOLUTION_STATS = 'UPDATE_EVOLUTION_STATS';

export const FETCH_YESTERDAY_STATS = 'FETCH_YESTERDAY_STATS';
const UPDATE_YESTERDAY_STATS = 'UPDATE_YESTERDAY_STATS';

export const FETCH_DAILY_SUMMARY = 'FETCH_DAILY_SUMMARY';
const UPDATE_DAILY_SUMMARY = 'UPDATE_DAILY_SUMMARY';

const SET_ACTIVE_COUNTRY = 'SET_ACTIVE_COUNTRY';

const SET_COUNTRIES_OPTIONS = 'SET_COUNTRIES_OPTIONS';


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

    case UPDATE_GLOBAL_STATS_DATA_WITH_COORDINATES:
      return {
        ...state,
        globalStatsWithCoordinates: action.value,
      };

    case UPDATE_EVOLUTION_STATS:
      return {
        ...state,
        dailyStats: action.value,
      };

    case UPDATE_YESTERDAY_STATS:
      return {
        ...state,
        yesterdayStats: action.value,
      };

    case UPDATE_DAILY_SUMMARY:
      return {
        ...state,
        dailySummary: action.value,
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
        countriesOptions: action.value,
      };

    default: return state;
  }
};

// --- action creators

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
});
export const updateCountriesArray = (value) => ({
  type: UPDATE_COUNTRIES_ARRAY,
  value,
});

export const fetchCountryData = (value) => ({
  type: FETCH_COUNTRY_DATA,
  value,
});

export const fetchStatsData = () => ({
  type: FETCH_STATS_DATA,
});
export const updateStatsData = (value) => ({
  type: UPDATE_STATS_DATA,
  value,
});

export const fetchGlobalStatsData = () => ({
  type: FETCH_GLOBAL_STATS_DATA,
});
export const updateGLobalStatsData = (value) => ({
  type: UPDATE_GLOBAL_STATS_DATA,
  value,
});

export const fetchGlobalStatsDataWithCoordinates = () => ({
  type: FETCH_GLOBAL_STATS_DATA_WITH_COORDINATES,
});
export const updateGLobalStatsDataWithCoordinates = (value) => ({
  type: UPDATE_GLOBAL_STATS_DATA_WITH_COORDINATES,
  value,
});

export const fetchEvolutionStats = (value) => ({
  type: FETCH_EVOLUTION_STATS,
  value,
});
export const updateEvolutionStats = (value) => ({
  type: UPDATE_EVOLUTION_STATS,
  value,
});

export const fetchYesterdayStats = () => ({
  type: FETCH_YESTERDAY_STATS,
});
export const updateYesterdayStats = (value) => ({
  type: UPDATE_YESTERDAY_STATS,
  value,
});

export const fetchDailySummary = () => ({
  type: FETCH_DAILY_SUMMARY,
});
export const updateDailySummary = (value) => ({
  type: UPDATE_DAILY_SUMMARY,
  value,
});

export const setActiveCountry = (value) => ({
  type: SET_ACTIVE_COUNTRY,
  value,
});

export const setCountriesOptions = (value) => ({
  type: SET_COUNTRIES_OPTIONS,
  value,
});

// --- export
export default reducer;
