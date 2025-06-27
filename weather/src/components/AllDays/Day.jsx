import React from 'react'
import { BottomPart, DayWrapper, TopPart } from './styles'
import getWeatherIcon from '../../utils/getWeatherIcon'

const Day = ({ day }) => {

  const { date, forecast } = day;
  const temp = Math.max(...forecast.map((x) => (
    Math.round(x.main.temp_max)
  )))//받아온 데이터를 map으로 순회

  const lowestTemp = Math.min(...forecast.map((x) => (
    Math.round(x.main.temp_min)
  )))

  const weekDays = new Date(date);
  const dayofweek = weekDays.toDateString().substring(0,3);
  const dates = date.split("-").join(".").substring(5);
  console.log(forecast[0].weather[0].main)

  let imageSrc = `./images/weatherIcons/${getWeatherIcon(forecast[0].weather[0].main)}`
  // let imageSrc = `./images/weatherIcons/${getWeatherIcon(forecast)}`

  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayofweek}</h2>
          <h3>{dates}</h3>
        </div>
        <img src={imageSrc} alt="" />
      </TopPart>
      <BottomPart>
        <h2>{temp}°</h2>
        <h3>{lowestTemp}°</h3>
      </BottomPart>
    </DayWrapper>
  )
}

export default Day