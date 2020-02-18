import { put } from 'redux-saga/effects';
import axios from 'axios';

import { getFormattedDate, getFormattedTime } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';

export function* fetchWeatherForecastsSaga() {
  try {
    const response = yield axios.get(
      'https://api.openweathermap.org/data/2.5/forecast?q=Manila&units=metric&cnt=33&appid=038749864f8b0cbec6ce7239f252273f'
    );

    console.log(response);

    const newWeatherForecasts = {};
    response.data.list.reduce((prev, curr) => {
      const date = getFormattedDate(new Date(curr.dt * 1000));

      if (!prev.hasOwnProperty(date)) {
        prev[date] = mapWeatherForecastResponse(curr);
        prev[date].hourlyForecasts = [];
      } else {
        const time = getFormattedTime(new Date(curr.dt * 1000));
        prev[date].hourlyForecasts.push({
          ...mapWeatherForecastResponse(curr),
          time
        });
      }

      return prev;
    }, newWeatherForecasts);

    yield put({
      type: actionTypes.FETCH_WEATHER_FORECAST_SUCCESS,
      payload: newWeatherForecasts
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: actionTypes.FETCH_WEATHER_FORECAST_FAILED,
      payload: error
    });
  }
}

function mapWeatherForecastResponse(forecast) {
  return {
    day: new Date(forecast.dt * 1000).getDay(), //convert to milliseconds
    icon: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
    minTemp: forecast.main.temp_min,
    maxTemp: forecast.main.temp_max
  };
}
