import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Data from '../../db/db.json'
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
const Single = () => {
  const { id } = useParams();
  const service = Data.filter(item => item.id == id);
  const { banner, title, duration, ratings, enrolled, price, description} = service[0];

  return (
    <div className='w-5/6 mx-auto mt-24'>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <img src={banner} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <p>{ description}</p>
          <div className="flex gap-4 my-4"><div className='flex items-center'>
            <AiOutlineClockCircle />
            {duration}hours</div>
            <div className='flex items-center'>
              <AiOutlineStar />
              {ratings}</div>
            <div className='flex items-center'>
              <BsPeople />
              {enrolled}</div>
          </div>
          <div className='flex items-center gap-6'>
            <NavLink to={"/service/" + id} className='bg-indigo-500 text-white px-2 py-1 uppercasetext-sm cursor-pointer'>Enroll Now</NavLink>
            <p className='text-xl font-semibold'>${price}</p>
          </div>
        </div>
      </div>
    </div>)
}

export default Single