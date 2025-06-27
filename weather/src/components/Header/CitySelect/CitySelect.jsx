import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { cityOptions } from '../data';
import { SelectWrapper } from '../styles';

const CitySelect = () => {
  return (
    <SelectWrapper>
    <CreatableSelect isClearable options={cityOptions}
      defaultInputValue={null}
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