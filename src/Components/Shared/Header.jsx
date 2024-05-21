import React, { useState } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const navigateToProfile = () => {
    navigate('/profile');
  };
  const navigateToSettings = () => {
    navigate('/settings');
  };
  const navigateToLogout = () => {
    navigate('/logout');
  };

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 hover:text-red-500 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-8 w-[20rem] border border-gray-300 rounded-xl pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <div className="relative">
          <HiOutlineChatAlt
            fontSize={20}
            className="text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => setMessageOpen(!isMessageOpen)}
          />
          {isMessageOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setMessageOpen(false)}
            >
              <div className="bg-white rounded-md p-6 w-80">
                <strong className="block text-lg mb-3">Messages</strong>
                <div className="text-sm">This is messages panel</div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <HiOutlineBell
            fontSize={20}
            className="text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => setNotificationOpen(!isNotificationOpen)}
          />
          {isNotificationOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setNotificationOpen(false)}
            >
              <div className="bg-white rounded-md p-6 w-80">
                <strong className="block text-lg mb-3">Notifications</strong>
                <div className="text-sm">This is notifications panel</div>
              </div>
            </div>
          )}
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">Open user menu</span>
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("http://source.unsplash.com/80x80?face")' }}
            >
              <span className="sr-only">Nathaniel Ifeanyi</span>
            </div>
          </MenuButton>

          <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow p-1 bg-white ring-1 ring-opacity-5">
            <MenuItem>
              {({ active }) => (
                <div
                  className={active ? 'bg-gray-100' : 'text-gray-700 cursor-pointer rounded-sm'}
                  onClick={navigateToProfile}
                >
                  Your Profile
                </div>
              )}
            </MenuItem>
            <div className='py-1'></div>
            <MenuItem>
              {({ active }) => (
                <div
                  className={active ? 'bg-gray-100' : 'text-gray-700 cursor-pointer rounded-sm '}
                  onClick={navigateToSettings}
                >
                  Settings
                </div>
              )}
            </MenuItem>
            <div className='py-1'></div>
            <MenuItem>
              {({ active }) => (
                <div
                  className={active ? 'bg-gray-100' : 'text-gray-700 cursor-pointer rounded-sm '}
                  onClick={navigateToLogout}
                >
                  Logout
                </div>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
