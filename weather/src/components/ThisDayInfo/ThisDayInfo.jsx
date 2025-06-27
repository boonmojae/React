import React from 'react'
import { ImgWrapper, ThisDayInfoWrapper } from './styles'

const ThisDayInfo = () => {


    return (
        <ThisDayInfoWrapper>
            <div className='info-row'>
                <ImgWrapper><img src='/images/temperature.svg'></img></ImgWrapper>
                <h2>Temperature</h2>
                <p>100°</p>
            </div>
            <div className='info-row'>
                <ImgWrapper><img src='/images/temperature.svg'></img></ImgWrapper>
                <h2>Temperature</h2>
                <p>100°</p>
            </div>
            <div className='info-row'>
                <ImgWrapper><img src='/images/temperature.svg'></img></ImgWrapper>
                <h2>Temperature</h2>
                <p>100°</p>
            </div>
            <div className='info-row'>
                <ImgWrapper><img src='/images/temperature.svg'></img></ImgWrapper>
                <h2>Temperature</h2>
                <p>100°</p>
            </div>
        </ThisDayInfoWrapper>
    )
}

export default ThisDayInfo