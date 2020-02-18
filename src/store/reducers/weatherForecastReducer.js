import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  forecasts: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_FORECAST_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecasts: action.payload
      };
    case actionTypes.FETCH_WEATHER_FORECAST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
