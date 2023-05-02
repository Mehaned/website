import React from 'react'

const Title = ({ title }) => {
  return (
   <>
      <div className='grid items-center'>
        <h1 className='font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]
         drop-shadow-lg'>{title}</h1>
      </div>
   </>
  )
}

export default Title