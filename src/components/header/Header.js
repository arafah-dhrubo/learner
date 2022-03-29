import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Header = () => {
  const { user, logout } = useAuth();
  
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        < NavLink to="/" className='text-3xl font-bold flex items-center' >
          learner < span className='text-5xl text-indigo-500 pb-3' >.</span >
        </NavLink >
        <div class="flex md:order-2">
          <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
            <li>
              <NavLink to="" className='hover:text-indigo-500 cursor-pointer'>Services</NavLink>
            </li>
            <li> <NavLink to="" className='hover:text-indigo-500 cursor-pointer'>Feedback</NavLink></li>
            <li>  <NavLink to="" className='hover:text-indigo-500 cursor-pointer'>Contact</NavLink></li>
        
            <li className='md:mt-0 md:mb-0 mt-2 mb-3'> {user?.email ? '' : <NavLink to="/login" className='border-2 text-gray-900 px-3 py-1 cursor-pointer hover:border-gray-800'>Log in</NavLink>}</li>
            {user?.email ? <li><button onClick={logout} className='border-2 text-gray-900 px-3 py-1 cursor-pointer hover:border-gray-800'>Log out</button> </li> : ''}
            {user?.displayName ? <p className=''>{user?.displayName}</p>:""}
            <li>
              {user?.email ? '' : <NavLink to="/signup" className='border-2 text-gray-900 px-3 py-1 cursor-pointer hover:border-gray-800'>Sign up</NavLink>}
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

