import React from 'react'

function SideHeading({heading}) {
  return (
    <div className='flex items-center gap-4 pb-10'>
        <h2 className='uppercase text-2xl'>{heading}</h2>
        <div className='h-[1px] bg-gray-300 w-full'></div>
    </div>
  )
}

export default SideHeading
