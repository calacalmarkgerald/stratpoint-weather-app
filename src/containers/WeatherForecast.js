import React, { Component } from 'react';

import styled from 'styled-components';
import Weather from '../components/Weather';
import axios from 'axios';

class WeatherForecast extends Component {
  state = {
    forecasts: []
  };

  componentDidMount() {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?q=Manila&units=metric&cnt=33&appid=038749864f8b0cbec6ce7239f252273f'
      )
      .then(response => {
        const newWeatherForecasts = [];
        let dayCount = 0;

        while (dayCount < 5) {
          let index = dayCount * 8;
          newWeatherForecasts.push(
            this.mapWeatherForecaseResponse(response.data.list[index])
          );

          dayCount++;
        }

        this.setState({
          forecasts: newWeatherForecasts
        });
      })
      .catch(error => console.log(error));
  }

  mapWeatherForecaseResponse(forecast) {
    return {
      day: new Date(forecast.dt * 1000).getDay(), //convert to milliseconds
      icon: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
      minTemp: forecast.main.temp_min,
      maxTemp: forecast.main.temp_max
    };
  }

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
