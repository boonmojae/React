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
