import React from 'react'
import triangleup from '../Static/triangleup.png'
import triangledown from '../Static/triangledown.png'
import upgrey from '../Static/upgrey.png'
import dgrey from '../Static/dgrey.png'

const data = [
    {
        no: 1, Name: "Airi Satou", Position: "Accountant", Office: "Edinburg", Age: "33", StartDate: "2008/11/28", Salary: "$144,566"
    },
    {
        no: 2, Name: "Anglica Ramos", Position: "Cheif Executive Officer(CEO)", Office: "San Fransico", Age: "47", StartDate: "2009/10/09", Salary: "$145,600"
    },
    {
        no: 3, Name: "Ashton Cox", Position: "Junior Technical Author", Office: "London", Age: "66", StartDate: "2009/01/12", Salary: "$162,700"
    },
    {
        no: 4, Name: "Bradley Greer", Position: "Software Engineer", Office: "Tokyo", Age: "41", StartDate: "2012/10/13", Salary: "$1,200,000"
    },
    {
        no: 5, Name: "Brenden Wagner", Position: "Software Engineer", Office: "London", Age: "28", StartDate: "2011/06/07", Salary: "$86,000"
    },
    {
        no: 6, Name: "Brielle Williamson", Position: "Integration Specialist", Office: "San Francisco", Age: "61", StartDate: "2012/12/02", Salary: "$132,000"
    },
    {
        no: 7, Name: "Brouno Nash", Position: "Software Engineer", Office: "New York", Age: "38", StartDate: "2011/05/03", Salary: "$206,850"
    },
    {
        no: 8, Name: "Caesar Vance", Position: "Pre Sales Support", Office: "London", Age: "21", StartDate: "2011/12/12", Salary: "$372,000"
    },
    {
        no: 9, Name: "Cara Stevens", Position: "Sales Assistant", Office: "New York", Age: "46", StartDate: "2011/12/06", Salary: "$163,500"
    },
    {
        no: 10, Name: "Cedric Kelly", Position: "Senior Javascript Developer", Office: "New York", Age: "22", StartDate: "2012/03/29", Salary: "433,060"
    },

]

const Table = () => {
    return (
        <div className=' ml-[240px]  bg-[#fafdfa] p-10'>
            <div className=' mb-3 text-[#5b5c65] flex items-center justify-between'>
                <div className='font-medium text-4xl'>Datatables</div>
                <div><span className='text-[#6c7ed5]'>Home</span> / tables / datatables </div>
            </div>
            <div className=' shadow-lg shadow-slate-300  px-5 py-5 rounded-md font-semibold text-base bg-white border-t-2 border-slate-100'>
                <div>
                    <div className='text-base text-[#6978ef] '>Datatables</div>
                    <div className='flex items-center justify-between text-[#868686] mt-4'>
                        <div className="flex items-center">
                            <div>Show</div>
                            <div className='flex items-center rounded border border-stone-500 px-2 ml-2 mr-2'>
                                <div>10</div>
                                <div className='pl-2 py-[3px] cursor-pointer'>
                                    <div className='w-2'><img className='object-contain' src={triangleup} alt="" /></div>
                                    <div className='w-2'><img className='object-contain' src={triangledown} alt="" /></div>
                                </div>
                            </div>
                            <div>entries</div>
                        </div>
                        <div>Search:
                            <input className='ml-1 border border-slate-500 rounded' type="text" />
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='rounded-sm text-[#6e707d] bg-[#e9ecf4] flex items-center px-5 py-3 mb-2'>
                        <div className='w-[25%]'>Name</div>
                        <div className='w-[25%]'>Position</div>
                        <div className='w-[20%]'>Office</div>
                        <div className='w-[10%]'>Age</div>
                        <div className='w-[10%]'>Start Date</div>
                        <div className='w-[10%]'>Salary</div>
                    </div>
                    <div className=''>
                        {data.map(element => {
                            const { Name, Position, Office, Age, StartDate, Salary } = element
                            return (
                                <>
                                    <div className='flex items-center px-5 py-2 text-[#868686]'>
                                        <div className='w-[25%]'>{Name}</div>
                                        <div className='w-[25%]'>{Position}</div>
                                        <div className='w-[20%]'>{Office}</div>
                                        <div className='w-[10%]'>{Age}</div>
                                        <div className='w-[10%]'>{StartDate}</div>
                                        <div className='w-[10%]'>{Salary}</div>
                                    </div>
                                    <div className='border  border-[#ececee] my-1 bg-[#ececee]'></div>
                                </>
                            )
                        })}
                    </div>
                    <div className='rounded-sm text-[#6e707d]  flex items-center px-5 py-3 mb-2'>
                        <div className='w-[25%]'>Name</div>
                        <div className='w-[25%]'>Position</div>
                        <div className='w-[20%]'>Office</div>
                        <div className='w-[10%]'>Age</div>
                        <div className='w-[10%]'>Start Date</div>
                        <div className='w-[10%]'>Salary</div>
                    </div>
                </div>
                <div className='flex items-center justify-between text-[#868686]'>
                    <div>Showing 1 to 10 of 57 entries</div>
                    <div className='shadow-sm shadow-slate-200 border border-slate-200 flex items-center '>
                        <div className='py-2 px-3 '>previous</div>
                        <div className='py-2 px-3 border border-slate-200 bg-[#6678ec] text-white'>1</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>2</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>3</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>4</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>5</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>6</div>
                        <div className='py-2 px-3 border border-slate-200 text-[#6678ec]'>Next</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Table