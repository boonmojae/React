import React, { useEffect, useState } from 'react'
import { ThisDayWrapper, Top, Bottom} from './styles'
import CurrentTime from './CurrentTime'
import useWeather from '../../utils/useWeather';


const ThisDay = () => {
  const {data, isLoading} = useWeather("Seoul");
  const temperature = Math.round(data?.main.temp||0);
  const cityName = data?.name;
  
  const weatherIcon = data?.weather[0].main;
  let imageSrc = './images/weatherIcons/clear-sky.svg';

  if(weatherIcon ==="Clear"){
    imageSrc = "./images/weatherIcons/clear-sky.svg"
  }else if(weatherIcon ==="Clouds"){
    imageSrc = "./images/weatherIcons/few-clouds.svg"
  }else if(weatherIcon ==="Rain"){
    imageSrc = "./images/weatherIcons/rain.svg"
  }else if(weatherIcon ==="Snow"){
    imageSrc = "./images/weatherIcons/snow.svg"
  }else if(weatherIcon ==="thunderstorm"){
    imageSrc = "./images/weatherIcons/thunderstorm.svg"
  }else if(weatherIcon ==="Atmosphere"){
    imageSrc = "./images/weatherIcons/mist.svg"
  }

  return (
  <ThisDayWrapper>
  {
    isLoading ?
    (
      "Loading..."
    ):
    (
      <>
        <Top>
          <div>
            <h2>{temperature}°</h2>
            <h3>Now</h3>
          </div>
          <img src={imageSrc} alt=""/>
        </Top>
        <Bottom>
          <CurrentTime/>
          <div>
            {cityName} - {data?.sys.country}
          </div>
        </Bottom>
      </>
    )
  }
  </ThisDayWrapper>
  )
}

export default ThisDay;


// import React, { useEffect, useState } from 'react'
// import { Bottom, ThisDayWrapper, Top } from './styles';
// import CurrentTime from './CurrentTime';
// import useWeather from '../../utils/useWeather';

// const ThisDay = () => {
//     //날씨 정보, 로딩 상태
//     const { data, isLoading } = useWeather("Seoul");

//     const temperature = Math.round(data?.main.temp || 0);
//     const cityName = data?.name;

//     const weatherIcon = data?.weather[0].main;


//     let imageSrc = '/images/weatherIcons/clear-sky.svg';

//     if(weatherIcon === "Clear") {
//         imageSrc = "/images/weatherIcons/clear-sky.svg";
//     } else if(weatherIcon === "Clouds"){
//         imageSrc = "/images/weatherIcons/Clouds.svg";
//     } else if(weatherIcon === "Atmosphere") {
//         imageSrc = "/images/weatherIcons/Atmosphere.svg";
//     } else if(weatherIcon === "Rain") {
//         imageSrc = "/images/weatherIcons/Rain.svg";
//     } else if(weatherIcon === "Snow") {
//         imageSrc = "/images/weatherIcons/Snow.svg";
//     } else if(weatherIcon === "Thunderstorm") {
//         imageSrc = "/images/weatherIcons/Thunderstorm.svg";
//     }

//     return (
//         <ThisDayWrapper>
//             {isLoading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <>
//                     <Top>
//                         <div>
//                             <h2>{temperature}°</h2>
//                             <h3>Now</h3>
//                         </div>
//                         <img src={imageSrc} alt="" />
//                     </Top>
//                     <Bottom>
//                         <CurrentTime />
//                         {cityName} - {data?.sys.country}
//                     </Bottom>
//                 </>
//             )}
//         </ThisDayWrapper>
//     )
// }

// export default ThisDay