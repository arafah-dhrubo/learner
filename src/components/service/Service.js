import React from 'react';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Service = item => {
  const { id, banner, title, duration, ratings, enrolled, price } = item?.item;
  return (
  <div className='border-gray-100 p-3 border-2 hover:border-gray-900'>
      <div className='mb-2'>
        <img src={banner} alt="" className='p-5' />
      </div>
      <div className='mb-3'>
        <h1 className='text-md font-semibold'>{title}</h1>
        <div className="flex justify-between">
          <div className='flex items-center'>
            <AiOutlineClockCircle />
            {duration}hours</div>
          <div className='flex items-center'>
            <AiOutlineStar />
            {ratings}</div>
          <div className='flex items-center'>
            <BsPeople />
            {enrolled}</div>
       </div>
      </div>
      <div className='flex items-center justify-between'>
        <NavLink to={"service/"+id} className='bg-indigo-500 text-white px-2 py-1 uppercasetext-sm cursor-pointer'>Enroll Now</NavLink>
        <p className='text-xl font-semibold'>${price}</p>
      </div>
    </div>
  )
}

export default Service