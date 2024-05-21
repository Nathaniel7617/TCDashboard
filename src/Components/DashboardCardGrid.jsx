import React from 'react'
import { IoBagHandle, IoPieChart, IoCartSharp   } from 'react-icons/io5'
import { FaUsers } from "react-icons/fa";

const DashboardCardGrid = () => {
  return (
    <div className='flex gap-4 w-full'>
      <BoxWrapper>
        <div className="rounded-full h-10 w-10 flex items-center justify-center bg-sky-900">
         <IoBagHandle className='text-xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-xs text-gray-500 font-light'>Total Sales</span>
            <div className='flex items-center'>
                <strong className='text-lg text-gray-700 font-semibold'>$77453.60</strong>
                <span className='text-xs text-green-500 pl-2'>+95234</span>
            </div>
        </div>
      </BoxWrapper>
      
      <BoxWrapper>
      <div className="rounded-full h-10 w-10 flex items-center justify-center bg-rose-600">
         <IoPieChart  className='text-xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-xs text-gray-500 font-light'>Total Expenses</span>
            <div className='flex items-center'>
                <strong className='text-lg text-gray-700 font-semibold'>$3423</strong>
                <span className='text-xs text-red-500 pl-2'>-143</span>
            </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="rounded-full h-10 w-10 flex items-center justify-center bg-amber-500">
         <FaUsers className='text-xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-xs text-gray-500 font-light'>Total Customers</span>
            <div className='flex items-center'>
                <strong className='text-lg text-gray-700 font-semibold'>$72313</strong>
                <span className='text-xs text-green-500 pl-2'>+1530</span>
            </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className="rounded-full h-10 w-10 flex items-center justify-center bg-emerald-700">
         <IoCartSharp  className='text-xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-xs text-gray-500 font-light'>Total Orders</span>
            <div className='flex items-center'>
                <strong className='text-lg text-gray-700 font-semibold'>$86432</strong>
                <span className='text-xs text-green-500 pl-2'>+2243</span>
            </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default DashboardCardGrid


function BoxWrapper({children}) {
    return <div className="bg-white rounded-xl p-4 flex-1 border-gray-200 flex items-center shadow-md hover:bg-gray-200 cursor-pointer">{children}</div>
}
