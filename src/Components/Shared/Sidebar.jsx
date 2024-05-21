import React from 'react'
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS} from '../../Lib/Consts/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-lg text-base text-sm'


const Sidebar = () => {
  return (
    <div className='bg-neutral-800 opacity-90 w-56 p-3 text-white flex flex-col'>
      <div className='flex items-center gap-2 px-1 py-3'>
      <PiCurrencyDollarSimpleFill fontSize={24} className='text-green-700 text-4xl bg-white rounded-full'/>
      <span  className='text-gray-100 text-lg'>TC-</span><span className='text-green-700 ml-[-8px] text-lg'>Sales</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700 '>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
          <SidebarLink key={item.key} item={item}/>
        ))}
        <div  className={classNames('text-red-500 cursor-pointer', linkClasses)}>
      <span className='text-xl'><HiOutlineLogout /></span>
       logout
    </div>
      </div>
    </div>
  )
}

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation()
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
       {item.label}
    </Link>
  )
}


