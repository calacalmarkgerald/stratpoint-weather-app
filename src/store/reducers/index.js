import { combineReducers } from 'redux';
import weatherForecastReducer from './weatherForecastReducer';

const rootReducer = combineReducers({
  weatherForecast: weatherForecastReducer
});

export default rootReducer;
