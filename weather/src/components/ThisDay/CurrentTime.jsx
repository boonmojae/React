import React from 'react'

const CurrentTime = () => {
  const time = new Intl.DateTimeFormat("Ko-KR",
    {
      hour: "numeric",
      minute: "numeric",
    }
  ).format();
  return (
    <div>
      {time}
    </div>
  )
}

export default CurrentTime



// import React, { useState, useEffect } from 'react'

// const CurrentTime = () => {

//     const [time, setTime] = useState('');

//     useEffect(() => {
//         const updateTime = () => {
//             const newTime = new Intl.DateTimeFormat("Ko-Kr", {
//                 hour: "numeric",
//                 minute: "numeric",
//             }).format();
//             setTime(newTime);
//         };

//         updateTime();
//         const interval = setInterval(updateTime, 1000);//타이머 시작

//         return () => clearInterval(interval);//타이머 정리
//     }, []);

//     return (
//         <div>{time}</div>
//     )
// }

// export default CurrentTime


