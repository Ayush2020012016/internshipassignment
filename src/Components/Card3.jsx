import React from 'react'
import forwardwhite from '../Static/forwardwhite.png'
const data = [
    {
        no: 1, orderid : "RA0449",Customer:"Udin Wayang", Item:"Nasi Padang",Status:"Delieverd",color:"#66b969",Action:"detail"
    },
    {
        no: 2, orderid : "RA5324",Customer:"Jaenab Baigur", Item:"Gundam 90's Edition",Status:"Shipping",color:"#f8a23f",Action:"detail"
    },
    {
        no: 3, orderid : "RA8568",Customer:"Rivat Mahesa", Item:"Oblong T-shirt",Status:"Pending",color:"#f85545",Action:"detail"
    },
    {
        no: 4, orderid : "RA1453",Customer:"Induri Junanda", Item:"hat rounded",Status:"Processing",color:"#22bbf3",Action:"detail"
    },
    {
        no: 5, orderid : "RA1998",Customer:"udin cliok", Item:"baby Powder",Status:"Delievered",color:"#66b969",Action:"detail"
    },
    
    
]

const Card3 = () => {
  return (
    <div className='w-[720px] bg-white shadow-md shadow-slate-300 ml-6  pt-2 mt-6'>
            <div className='flex items-center justify-between px-5 pb-2 font-semibold text-[#6b76df]'>
                <div>Invoice</div>
                <div className='flex items-center text-[white] bg-[#fc5349] p-2 rounded '>  View More <div className="w-4"><img className='object-contain mt-[2px]' src={forwardwhite} alt="" /></div> </div>
                </div>
            <div>
                <div className='flex items-center justify-between bg-[#e9ecf4] px-5 py-4 text-[#6d6f7c] font-semibold'>
                    <div>OrderId</div>
                    <div>Customer</div>
                    <div>Item</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>
                <div>
                    
                    {data.map(element => {
                        console.log(element)
                        const {orderid ,Customer, Item, Status, color,Action} = element;
                        return (<>
                        <div className=' flex items-center justify-between px-5 py-[13.5px]'>
                            
                                <div className='text-[#667bd9]'>{orderid}</div>
                                <div className='font-semibold text-[#6d6f7c]'>{Customer}</div>
                                <div className='font-semibold text-[#6d6f7c]'>{Item}</div>
                                <div className={'px-[2px] text-[white]  rounded'+ ` bg-[${color}]`}>{Status}</div>
                                <div className=' text-[white] bg-[#627aec] px-1 py-[2px] cursor-pointer rounded-md'>{Action}</div>
                        </div>
                        <div className='border  border-[#ececee]  bg-[#ececee]'></div>

                        </>)
                    })}
                </div>
            </div>
        </div>
  )
}

export default Card3