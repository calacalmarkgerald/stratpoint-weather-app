import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import WeatherForecast from './containers/WeatherForecast';
import HourlyForecast from './containers/HourlyForecast';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/daily' component={HourlyForecast} />
        <Route path='/' component={WeatherForecast} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  );
}

export default App;
