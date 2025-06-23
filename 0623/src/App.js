// 필요한 파일들을 가지고 오는 부분
import { useState } from 'react';

/**
 * Rendering
 * 렌더링
 * 렌더링은 컴포넌트가 현재 props와 state를 기반으로 
 * UI를 어떻게 구성할지 결정하는 과정
 * 
 * 1. 앱이 처음 실행될 때
 * 2. state 변경
 * 3. 부모 컴포넌트에 렌더링
 * 4. 부모 컴포넌트에 렌더링
 * React 렌더링 vs 브라우저 렌더링
 * - React 렌더링
 * 1. 컴포넌트 함수 호출
 *    props와 state를 기반으로 JSX 생성
 * 2. Virtual Dom 비교
 *    이전 결과와 새 결과 차이점 찾기
 * 3. DOM 업데이트
 *    변경된 부분만 실제 DOM에 반영
 * - 브라우저 렌더링
 * 1. 스타일 계산
 *    CSS를 파싱하려 스타일 규칙 계산
 * 2. 레이아웃 계산
 *    요소의 위치와 크기 결정
 * 3. 메인팅
 *    실제 화면에 픽셀로 그리기
 * 
 * 가상 돔이 동작하는 방식
 * [STEP 1]
 * 1. 화면이 갱신되기 전 구조가 담겨있는 가장 DOM 객체
 * 2. 화면 갱신 후 보여야할 가상 DOM 객체
 * 
 * [STEP 2 : diffing ]
 * 어느 부분(엘리먼트)에서 변화가 일어났는지를 빠르게 파악
 * 
 * [STEP 3 : 재조정(reconciliation)]
 * 변경이 일어난 그 부분만 실제 DOM에 적용
 * 한건 한건 적용시키는 것이 아니라,
 * 변경사항을 모두 모아 한 번만 적용
 * Batch Update
 * 
 * Virtual Dom은 실제 DOm의 메모리 내 복사본
 * Diffing으로 변경점을 효율적으로 감지
 * Batch Update로 모든 변경을 한번에 처리
 * Reconciliation으로 최소한의 DOM 조작
 * 
 */

const App = () => {

  return(
    <div>
      <h1>렌더링 예제</h1>
      <Couter />
    </div>
  )


}

function Couter() {
  console.log("Counter 컴포넌트 렌더링");

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  return(
    <div>
      <h2>카운트 : {count}</h2>
      <button onClick={increment}>증가</button>
    </div>
  )
}


export default App;
