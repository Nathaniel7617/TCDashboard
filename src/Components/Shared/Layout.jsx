import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-max overflow-hidden'>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className='p-4 bg-neutral-100 flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;
