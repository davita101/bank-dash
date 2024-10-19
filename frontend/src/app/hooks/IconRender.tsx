import React from 'react'

interface MyICons {
    src: React.FC, // function 
}

const IconRender: React.FC<MyICons> = ({src}) => {
const Img = src
  return (
    <div>
      <Img />
    </div>
  )
}

export default IconRender
