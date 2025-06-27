import React from 'react'
import Header from '../components/Header/Header'
import { HomeWrapper, BackGroundGradient, MainContent, WeatherSection, InfoSection, ForecastSection, Size } from './styles'
import ThisDay from '../components/ThisDay/ThisDay'
import ThisDayInfo from '../components/ThisDayInfo/ThisDayInfo'
import AllDays  from '../components/AllDays/AllDays'

const Home = () => {
  return (
    <HomeWrapper>
      <BackGroundGradient>
        <Size>
          <Header />
          <MainContent>
            <WeatherSection>
              <ThisDay />
            </WeatherSection>
            <InfoSection>
              <ThisDayInfo />
            </InfoSection>
          </MainContent>
          <ForecastSection>
            <AllDays />
          </ForecastSection>
        </Size>
      </BackGroundGradient>
    </HomeWrapper>
  )
}

export default Home