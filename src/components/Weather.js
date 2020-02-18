import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function Weather({
  mode,
  day,
  time,
  icon,
  minTemp,
  maxTemp,
  onClick
}) {
  return (
    <Container onClick={onClick}>
      {mode === 'HOURLY' ? <Time>{time}</Time> : <Day>{DAYS[day]}</Day>}

      <Icon src={icon} />
      <TemperatureRange>
        <MaxTemperature>{minTemp} &deg;</MaxTemperature>
        <MinTemperature>{maxTemp} &deg;</MinTemperature>
      </TemperatureRange>
    </Container>
  );
}

Weather.propTypes = {
  mode: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  time: PropTypes.string,
  icon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

Weather.defaultProps = {
  mode: 'DEFAULT'
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fdfbfc;
  border: 1px transparent solid;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #f2994a;
    cursor: pointer;
  }
`;

const Time = styled.span`
  display: inline-block;
  padding: 5px;
`;

const Day = styled.span`
  display: inline-block;
  padding: 5px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;
`;

const TemperatureRange = styled.div`
  display: flex;
  padding: 5px;
`;

const MaxTemperature = styled.span`
  display: inline-block;
  padding-right: 5px;
`;

const MinTemperature = styled.span`
  display: inline-block;
  padding-left: 5px;
`;
