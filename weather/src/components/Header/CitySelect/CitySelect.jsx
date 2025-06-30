import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { cityOptions } from '../data';
import { SelectWrapper } from '../styles';
import { useNavigate } from 'react-router-dom'; //페이지 이동 훅

const CitySelect = () => {  
  
  const navigate = useNavigate();//페이지 이동을 위한 훅
  
  // onChange에서 매개변수를 받도록 수정
  const handleChange = (newValue, actionMeta) => {
    if (newValue) {
      console.log('선택된 값:', newValue); // 디버깅용
      navigate(`/${newValue.value}`);
    }
  }

  return (
    <SelectWrapper>
      <CreatableSelect 
        options={cityOptions}
        // defaultInputValue={null}
        defaultInputValue=""
        onChange={handleChange}
        className='react-select-container'
        classNamePrefix='react-select'
      />
    </SelectWrapper>
  )
}

export default CitySelect


//이거 하면 select가 앞으로 옴 대신 css적용 X
// import React from 'react'
// import CreatableSelect from 'react-select/creatable';
// import { cityOptions } from '../data';
// import { SelectWrapper } from '../styles';

// const CitySelect = () => {
//   return (
//     <SelectWrapper>
//     <CreatableSelect
//       isClearable
//       options={cityOptions}
//       defaultInputValue={null}
//       className='react-select-container'
//       classNamePrefix='react-select'
//       menuPortalTarget={document.body} // 이것 추가!
//       styles={{
//         menuPortal: (base) => ({ ...base, zIndex: 9999 })
//       }}
//     />
//     </SelectWrapper>
//   )
// }

// export default CitySelect