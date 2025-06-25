import React from 'react'
// import imageSrc from '../../../public/images/weatherIcons/rain.svg'

const ThisDay = () => {
  let imageSrc = './images/weatherIcons/rain.svg'
  return (
    <>
      <div>
        <h2>100°</h2>
        <h2>Now</h2>
      </div>
      <img src={imageSrc} alt="" />

      <div>16:04</div>
      <div>
        Seoul - KR
      </div>
    </>
  )
}

export default ThisDay
