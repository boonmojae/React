import { useTime } from '../../utils/useTime';

const CurrentTime = () => {

  //useTime 훅을 사용해서 현재 시간을 1초마다 갱신
  const currentTime = useTime(1000)  ;

  //시간을 한국어 형식으로 포맷팅
  const time = new Intl.DateTimeFormat("Ko-KR",
    {
      hour: "numeric",
      minute: "numeric",
    }
  ).format(
    currentTime
  );
  
  //화면에 시간 표시
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


