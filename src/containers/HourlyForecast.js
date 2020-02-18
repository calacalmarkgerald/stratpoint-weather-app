import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

class DailyForecast extends Component {
  state = {
    date: null
  };

  componentWillMount() {
    if (!this.props.forecasts) {
      this.props.history.replace('/');
    } else {
      const queryParams = new URLSearchParams(this.props.location.search);
      this.setState({
        date: queryParams.get('date')
      });
    }
  }

  backHandler = () => {
    this.props.history.push('/');
  };

  render() {
    const { date } = this.state;
    const displayDate = new Date(date).toDateString();

    return (
      <Container>
        <Header>Hourly Forecast</Header>
        <SubHeader>{displayDate}</SubHeader>
        <BackButton onClick={this.backHandler}>Back</BackButton>
        {this.props.forecasts ? (
          <WeatherContainer>
            {this.props.forecasts[date].hourlyForecasts.map(
              (forecast, index) => (
                <Weather
                  key={index}
                  day={forecast.day}
                  time={forecast.time}
                  icon={forecast.icon}
                  minTemp={forecast.minTemp}
                  maxTemp={forecast.maxTemp}
                  mode='HOURLY'
                />
              )
            )}
          </WeatherContainer>
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  forecasts: state.weatherForecast.forecasts
});

export default connect(mapStateToProps)(DailyForecast);

const Container = styled.div`
  position: relative;
  top: -100px;
  max-width: 1000px;
  min-width: 600px;
  color: #fdfbfc;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 48px;
  text-align: center;
  line-height: 1.2;
  font-weight: 400;
`;

const SubHeader = styled.h3`
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const BackButton = styled.button`
  border-radius: 20px;
  position: absolute;
  margin: 10px 40px;
  padding: 10px 30px;
  top: -80px;
  left: 30px;
  background-color: #ec6e4c;
  color: #fdfbfc;
  border: none;
  outline: none;
  font-size: 16px;
  min-width: 80px;
  min-height: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #ce5534;
  }
`;
