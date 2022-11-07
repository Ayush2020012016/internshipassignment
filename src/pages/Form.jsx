import React from 'react'
import downwardarrow from '../Static/downwardarrow.png'

const Form = () => {
    return (
        <div className=' h-[100vh] bg-[#fafdfa] shadow-md shadow-slate-300   pt-2 ml-[240px] p-3 flex items-center  justify-center'>
            <div className='bg-white w-[64vw] border  border-[#ececee] font-semibold text-lg shadow-lg shadow-[#6678ee]'> 
                <div className="rounded-t-md px-5 py-5 bg-[#6678ee]">
                    <div className='font-semibold text-lg '>Basic Info</div>
                </div>
                <div className='border  border-[#ececee] bg-[#ececee]'></div>
                <div>
                    <div className='flex items-center px-5 py-5 justify-between'>
                        <div>
                            <div>First Name</div>
                            <input className='border-2 border-slate-300 px-2 py-2 rounded w-[300px]' placeholder='Enter the first name' type="text" />
                        </div>
                        <div>
                            <div>last Name</div>
                            <input className='border-2 border-slate-300 px-2 py-2 rounded w-[300px]' id='lastname' placeholder='Enter the last name' type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center px-5 py-5 justify-between'>
                        <div>
                            <div>Mobile Number</div>
                            <div className='flex items-center'>
                                <div className='px-2 py-2 border-2 rounded-l border-slate-300 flex items-center'>+254 <div className='w-2'><img src={downwardarrow} alt="" /></div></div>
                                <input className='border-2 border-slate-300 px-2 py-2 rounded-r w-[300px]' placeholder='Enter the first name' type="text" /></div>
                        </div>
                        <div>
                            <div>Email Address</div>
                            <input className='border-2 border-slate-300 px-2 py-2 rounded w-[300px]' id='lastname' placeholder='Enter the last name' type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center px-5 py-5 justify-between'>
                        <div>
                            <div>Gender</div>
                            <select  className=' w-[61.4vw] px-2 py-2 outline-none border-2 rounded border-slate-300' name="gender" id="gender">
                                <option className='text' value="">select an option</option>
                                <option value="">male</option>
                                <option value="">female</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center px-5 py-5 justify-between'>
                        
                        <div>
                            <div>Date of birth</div>
                            <input className='border-2 border-slate-300 px-2 py-2 rounded w-[300px]' id='' placeholder='Enter the date' type="date" />
                       
                        </div>
                        <div>
                            <div>year</div>
                            <input className='border-2 border-slate-300 px-2 py-2 rounded w-[300px]' id='' placeholder='Enter the year' type="number" />
                        </div>
                    </div>
                </div>
                <div className='bg-[#6678ee] mx-3 my-3 rounded-md cursor-pointer hover:opacity-90 px-3 py-3 text-center'>Signup Now</div>

            </div>

        </div>

    )
}

export default Form