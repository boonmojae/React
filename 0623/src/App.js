// 필요한 파일들을 가지고 오는 부분
import { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    console.log(inputValue);
  }

  return(
    <div>
      <input type="text" onChange={onChangeHandler} value={value}/>
    </div>
  )
}



export default App;
