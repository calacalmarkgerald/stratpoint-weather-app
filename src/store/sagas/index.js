import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { fetchWeatherForecastsSaga } from './weatherForecast';

export function* watchAll() {
  yield takeEvery(
    actionTypes.FETCH_WEATHER_FORECAST_START,
    fetchWeatherForecastsSaga
  );
}
