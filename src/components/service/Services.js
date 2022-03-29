import React from 'react'
import Data from '../../db/db.json'
import Service from './Service'
const Services = () => {
  const courses = Data?.map((item, idx) => <Service
    key={idx} item={item} />)
  return (
    <div className='w-5/6 mx-auto'>
      <div className='text-center mt-28'>
        <h1 className='text-2xl uppercase font-bold'>
          All Services
        </h1>
        <p className='mx-auto md:w-3/6'>Pick a course and jump into your dream career. Your success is our motivation.</p>
      </div>
      <hr className='mx-auto w-3/12 md:w-1/12 border-2 border-indigo-500 mt-2'/>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {courses}
      </div>
    </div>
  )
}

export default Services