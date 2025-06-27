import { useEffect, useState } from "react";

export const useTime = (refreshCycle = 1000) => {
  //현재 시간 상태 관리
  const [now, setNow] = useState(getTime());

  //컴포넌트가 마운트되면 타이머 시작
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(getTime())//매초 시간 업데이트
    }, refreshCycle)

    //컴포넌트가 사라지면 타이머 정리
    return () => clearInterval(intervalId);
  }, [refreshCycle]);

  //현재 시간 반환
  return now;
}

export const getTime = () => {
  return new Date();
}