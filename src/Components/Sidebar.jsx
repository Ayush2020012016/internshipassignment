import React from 'react'
import Speedometer from '../Static/speedometer.png'
import bootstrap from '../Static/bootstrap.png'
import grid from '../Static/grid.png'
import notes from '../Static/notes.png'
import pallete from '../Static/pallete.png'
import forwardarrow from '../Static/forwardarrow.png'
import pages from '../Static/pages.png'
import chart from '../Static/chart.png'



const Sidebar = () => {
    return (
        <>
            <div className='w-60 fixed'>
                <div className='bg-[#4554c9] text-2xl text-center text-white px-10 py-5 h-20'>Dashboard</div>
                <div className='flex items-center px-10 py-7 text-lg font-bold text-[#77767f]'><div className='w-6 inline-block mr-3'><img className='object-contain' src={Speedometer} /></div> Dashboard</div>
                <div className='border border-[#ececee] bg-[#ececee]'></div>
                <ul>
                    <li className='py-3 px-10 text-[#b8b8c3] tracking-widest'>FEATURES</li>
                    <li className=' cursor-pointer flex items-center py-2 px-10 hover:bg-slate-200'><div className='w-6 inline-block mr-3'>
                        <img className='object-contain' src={bootstrap} alt="" /></div> Bootstrap <div className='w-4 ml-auto'><img className='object-contain' src={forwardarrow} alt="" /></div></li>
                    <li className=' hover:bg-slate-200 cursor-pointer flex items-center py-2 px-10'><div className='w-6 inline-block mr-3'>
                        <img className=' hover:bg-slate-200 object-contain' src={grid} alt="" /></div> Forms  <div className='w-4 ml-auto'><img className='object-contain' src={forwardarrow} alt="" /></div></li>
                    <li className=' hover:bg-slate-200 cursor-pointer flex items-center py-2 px-10'><div className='w-6 inline-block mr-3'>
                        <img className='object-contain' src={notes} alt="" /></div> Tables  <div className='w-4 ml-auto'><img className='object-contain' src={forwardarrow} alt="" /></div></li>
                    <li className=' hover:bg-slate-200 cursor-pointer flex items-center py-2 px-10'><div className='w-6 inline-block mr-3'>
                        <img className='object-contain' src={pallete} alt="" /></div> Ui Colors </li>

                </ul>
                <div className='border  border-[#ececee] my-3 bg-[#ececee]'></div>

                <ul>
                    <li className='  py-2 px-10 text-[#b8b8c3] tracking-widest'>EXAMPLES</li>
                    <li className=' hover:bg-slate-200 cursor-pointer flex items-center py-2 px-10'><div className='w-6 inline-block mr-3'>
                        <img className='object-contain' src={pages} alt="" /></div> Pages <div className='w-4 ml-auto'><img className='object-contain' src={forwardarrow} alt="" /></div></li>
                    <li className=' hover:bg-slate-200 cursor-pointer flex items-center py-2 px-10'><div className='w-6 inline-block mr-3'>
                        <img className='object-contain' src={chart} alt="" /></div> Chart </li>
                </ul>
                <div className='border  border-[#ececee] my-3 bg-[#ececee]'></div>
                <div className='px-10 text-[#b8b8c3]'>version 1.1</div>

            </div>
          
        </>
    )
}

export default Sidebar