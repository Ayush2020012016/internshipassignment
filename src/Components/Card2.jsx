import React from 'react'
import downwardarrow from '../Static/downwardarrow.png'
import bluerightarrow from '../Static/bluerightarrow.png'

const Card2 = () => {
    return (
        <div className='w-[480px] bg-white shadow-md shadow-slate-300 ml-6 px-4 py-4 mt-6'>
            <div className='flex items-center justify-between text-sm font-medium text-[#6678ee]'>
                Products Sold
                <div className=' flex items-center bg-[#6678ee] text-[white] rounded-sm p-2'>
                    Month <div className='w-3 ml-1 '><img className='object-contain' src={downwardarrow} alt="" /></div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex items-center text-xs font-medium text-[#b8b7c6]'>Oblong T-shirt <div className='ml-auto'>600 of 800 items</div></div>
                <div className=' rounded-t-full rounded-r-full rounded-b-full rounded-l-full bg-[#e9ecf4] w-full h-3 border border-[#e9ecf4]'>
                    <div className='bg-[#ffa224] h-full w-4/5 rounded-full'></div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex items-center text-xs font-medium text-[#b8b7c6]'>Gundam 90'Editions <div className='ml-auto'>500 of 800 items</div></div>
                <div className=' rounded-t-full rounded-r-full rounded-b-full rounded-l-full bg-[#e9ecf4] w-full h-3 border border-[#e9ecf4]'>
                    <div className='bg-[#66bb69] h-full w-3/5 rounded-full'></div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex items-center text-xs font-medium text-[#b8b7c6]'>Rounded Hat <div className='ml-auto'>455 of 800 items</div></div>
                <div className=' rounded-t-full rounded-r-full rounded-b-full rounded-l-full bg-[#e9ecf4] w-full h-3 border border-[#e9ecf4]'>
                    <div className='bg-[#fc5349] h-full w-2/5 rounded-full'></div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex items-center text-xs font-medium text-[#b8b7c6]'>Indomie Goreng<div className='ml-auto'>400 of 800 items</div></div>
                <div className=' rounded-t-full rounded-r-full rounded-b-full rounded-l-full bg-[#e9ecf4] w-full h-3 border border-[#e9ecf4]'>
                    <div className='bg-[#3bbaf4] h-full w-1/5 rounded-full'></div>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex items-center text-xs font-medium text-[#b8b7c6]'>Remote Control Car Racing <div className='ml-auto'>200 of 800 items</div></div>
                <div className=' rounded-t-full rounded-r-full rounded-b-full rounded-l-full bg-[#e9ecf4] w-full h-3 border border-[#e9ecf4]'>
                    <div className='bg-[#66bb69] h-full w-3/5 rounded-full'></div>
                </div>
            </div>

            <div className='text-[#657ae5] mt-4 flex items-center justify-center text-center cursor-pointer'>View More <div className="w-3"><img className='object-contain' src={bluerightarrow} alt="" /></div></div>
        </div>
    )
}

export default Card2