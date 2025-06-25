import React from 'react'
import Header from '../components/Header/Header'
import { HomeWrapper, BackGroundGradient} from './styles'
import ThisDay from '../components/ThisDay/ThisDay'


const Home = () => {
  return (
    <HomeWrapper>
      <BackGroundGradient>
      <Header />
      <ThisDay />
      </BackGroundGradient>
    </HomeWrapper>
  )
}

export default Home
