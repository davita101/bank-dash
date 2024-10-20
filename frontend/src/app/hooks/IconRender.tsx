import React from 'react'

interface MyICons {
    src: React.FC, // function 
}


const IconRender: React.FC<MyICons> = ({src},{text}) => {
const Img = src
const P = text
  return (
    <div className='w-[25px] h-[25px] flex justify-center items-center'>
      <Img  />
    </div>
  )
}

export default IconRender
