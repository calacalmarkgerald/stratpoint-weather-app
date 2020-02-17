import React, { Component } from 'react';

import styled from 'styled-components';
import Weather from '../components/Weather';

class WeatherForecast extends Component {
  state = {
    forecasts: [
      {
        day: 'Mon',
        icon: 'http://openweathermap.org/img/wn/10d@2x.png',
        minTemp: 30,
        maxTemp: 35
      },
      {
        day: 'Tues',
        icon: 'http://openweathermap.org/img/wn/11d@2x.png',
        minTemp: 30,
        maxTemp: 35
      },
      {
        day: 'Wed',
        icon: 'http://openweathermap.org/img/wn/09d@2x.png',
        minTemp: 30,
        maxTemp: 35
      },
      {
        day: 'Thurs',
        icon: 'http://openweathermap.org/img/wn/13d@2x.png',
        minTemp: 30,
        maxTemp: 35
      },
      {
        day: 'Fri',
        icon: 'http://openweathermap.org/img/wn/10d@2x.png',
        minTemp: 30,
        maxTemp: 35
      }
    ]
  };

  render() {
    return (
      <Container>
        <Header>Weather Forecast</Header>
        <WeatherContainer>
          {this.state.forecasts.map((forecast, index) => (
            <Weather
              key={index}
              day={forecast.day}
              icon={forecast.icon}
              minTemp={forecast.minTemp}
              maxTemp={forecast.maxTemp}
            />
          ))}
        </WeatherContainer>
      </Container>
    );
  }
}

export default WeatherForecast;

const Container = styled.div`
  padding: 20px;
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.h1`
  color: #333;
  text-align: center;
`;
