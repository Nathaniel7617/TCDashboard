import React from 'react'
import DashboardCardGrid from './DashboardCardGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrder from './RecentOrder'
import PopularProducts from './PopularProducts'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
        <DashboardCardGrid />
        <div className='grid grid-flow-col gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
         <RecentOrder />
         <PopularProducts />
        </div>
    </div>
  )
}

export default Dashboard
