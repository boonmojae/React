import React, { useState } from 'react'
import { Bottom, ThisDayWrapper, Top } from './styles';
import CurrentTime from './CurrentTime';

const ThisDay = () => {
    let imageSrc = '/images/weatherIcons/';
    const [imagsrc, setImagsrc] = useState(imageSrc + "few-clouds.svg");
    
    return (
        <ThisDayWrapper>
            <Top>
                <div>
                    <h2>21°</h2>
                    <h3>Now</h3>
                </div>
                <img src={imagsrc} alt=""/>
            </Top>
            <Bottom>
                <CurrentTime />
                    <div>Seoul - KR</div>
            </Bottom>
        </ThisDayWrapper>
    )
}

export default ThisDay