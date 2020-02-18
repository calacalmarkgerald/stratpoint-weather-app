import * as actionTypes from './actionTypes';

export const fetchWeatherForecasts = () => {
  return {
    type: actionTypes.FETCH_WEATHER_FORECAST_START
  };
};
