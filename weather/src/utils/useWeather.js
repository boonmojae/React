import openWeather from "./openWeather"; //날씨 APi 라이브러리
import { useQuery } from "@tanstack/react-query"; //서버 상태 관리 라이브러리

// city 매개변수 추가
// 비동기 데이터 가져오기 함수
export const getWeather = async (city = "Seoul") => {
  const weather = openWeather.getCurrentWeatherByCityName({
    cityName: city,
    countryCode: "KR",
    units: "metric",
  });
  return weather;
}

//커스텀 훅
const useWeather = (city = "Seoul") => {
  const { data, ...rest } = useQuery({
    //캐시 및 refetch 기준 키
    queryKey: ["weather", city],
    //데이터를 가져올 비동기 함수
    queryFn: () => getWeather(city),
    //데이터를 상태로 유지할 시간(ms)
    // staleTime: 1000 * 60 * 5
  });

  return { data, ...rest };//데이터와 기타 상태들 반환
}

export default useWeather;