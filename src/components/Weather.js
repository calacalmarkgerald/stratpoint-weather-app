import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function Weather({ day, icon, minTemp, maxTemp }) {
  return (
    <Container>
      <Day>{DAYS[day]}</Day>
      <Icon src={icon} />
      <TemperatureRange>
        <MaxTemperature>{minTemp} &deg;</MaxTemperature>
        <MinTemperature>{maxTemp} &deg;</MinTemperature>
      </TemperatureRange>
    </Container>
  );
}

Weather.propTypes = {
  day: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555;

  &:hover {
    border: 1px #ccc solid;
    cursor: pointer;
  }
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
