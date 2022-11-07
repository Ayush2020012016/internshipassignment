import React from 'react'
import bootstrap from '../Static/bootstrap.png'
import uparrow from '../Static/uparrow.png'

const Card1 = (props) => {
    const {heading, price, img, rate, time} = props
   
  return (
    <div className='bg-white px-4 py-3 shadow-lg shadow-slate-300 ml-6 rounded w-[300px]'>
        <div className='text-sm font-semibold'>{heading}</div>
        <div className='flex items-center justify-between  text-lg leading-tight font-semibold'>{price} <div className='w-8'>{img()}</div></div>
        <div className='mt-1 text-xs flex items-center'><div className='w-3'><img className='object-contain' src={uparrow} alt="" /></div> <span className='text-[#7eb37e] mr-3'>{rate}</span> {time}</div>
    </div>
  )
}

export default Card1