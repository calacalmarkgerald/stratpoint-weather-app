import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import * as actions from '../store/actions';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

class WeatherForecast extends Component {
  componentDidMount() {
    this.props.fetchWeatherForecasts();
  }

  onClickHandler = date => {
    this.props.history.push({
      pathname: '/daily',
      search: `?date=${date}`
    });
  };

  render() {
    return (
      <Container>
        <Header>Weather Forecast</Header>
        {this.props.loading || this.props.forecasts === null ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <WeatherContainer>
            {Object.keys(this.props.forecasts).map(key => (
              <Weather
                key={key}
                day={this.props.forecasts[key].day}
                icon={this.props.forecasts[key].icon}
                minTemp={this.props.forecasts[key].minTemp}
                maxTemp={this.props.forecasts[key].maxTemp}
                onClick={() => this.onClickHandler(key)}
              />
            ))}
          </WeatherContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.weatherForecast.loading,
  forecasts: state.weatherForecast.forecasts,
  error: state.weatherForecast.error
});

export default connect(mapStateToProps, {
  fetchWeatherForecasts: actions.fetchWeatherForecasts
})(WeatherForecast);

const Container = styled.div`
  position: relative;
  top: -100px;
  max-width: 1000px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.h1`
  color: #fdfbfc;
  font-size: 48px;
  text-align: center;
  line-height: 1.2;
  font-weight: 400;
`;
