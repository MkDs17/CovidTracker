// --- initial state
const initialState = {
  countries: [],
  statsData: null,
};

// --- action types
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const UPDATE_COUNTRIES_ARRAY = 'UPDATE_COUNTRIES_ARRAY';

export const FETCH_STATS_DATA = 'FETCH_STATS_DATA';
export const UPDATE_STATS_DATA = 'UPDATE_STATS_DATA';

export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';



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

// --- export
export default reducer;
