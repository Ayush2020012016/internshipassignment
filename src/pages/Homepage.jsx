import React from 'react'
import hamburger from '../Static/hamburger.png'
import notificationclock from '../Static/notificationclock.png'
import todolist from '../Static/todolist.png'
import Avatar from '../Static/avatar.png'
import Card1 from '../Components/Card1'
import Card2 from '../Components/Card2'
import Card3 from '../Components/Card3'
import planner from '../Static/planner.png'
import messaging from '../Static/messaging.png'
import user from '../Static/user.png'
import shoppingcart from '../Static/shoppingcart.png'

const Homepage = () => {
  return (
    <div className='ml-60 bg-[#ececee]  h-[100vh]'>
            
    <div className=' py-7 px-6 bg-[#6678ee] h-20 flex align-center '>
        <div className='w-8'><img className='object-contain' src={hamburger} alt="" /></div>
        <div className='w-6 ml-auto '><img className='object-contain' src={notificationclock} alt="" /></div>
        <div className='w-6 ml-6'><img className='object-contain' src={todolist} alt="" /></div>
        <div className='border-l border-white ml-6'></div>
        <div className='flex items-center ml-6'>
            <div className='w-8 rounded-full border border-white p-1 mr-2'><img className='object-contain ' src={Avatar} alt="" /></div><div> Ayush Nautiyal</div>
        </div>

    </div>
    <div className=''>
        <div className='font-normal text-4xl mx-6 mt-6 mb-6'>Dashboard</div>
        <div className="flex items-center">
            <Card1 heading={"Earning (monthly)"} price={"$40,000"} img = {()=>{return <><img className='object-contain' src={planner} alt="" /></>}} rate={"3.49%"} time ={"Since last month"} />
            <Card1 heading={"SALES"} price={"650"} img = {()=>{return <><img className='object-contain' src={shoppingcart} alt="" /></>}} rate={"12%"} time ={"Since last years"} />
            <Card1 heading={"NEW USER"} price={"366"} img = {()=>{return <><img className='object-contain' src={user} alt="" /></>}} rate={"20.4%"} time ={"Since last month"} />
            <Card1 heading={"PENDING REQUESTS"} price={"18"} img = {()=>{return <><img className='object-contain' src={messaging} alt="" /></>}} rate={"1.10%"} time ={"Since Yesterday"} />
        </div>
    </div>
{/* third section */}
    <div className='flex items-start'>
            <Card2 />
            <Card3 />
    </div>
   
    

</div>
  )
}

export default Homepage