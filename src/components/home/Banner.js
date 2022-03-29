import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <div className="flex gap-6 items-center md:flex-row flex-col-reverse">
        <div>
          <h1 className='md:text-5xl text-3xl uppercase font-semibold'>Grow your digital marketing skills.</h1>
          <p className='mt-2 mb-8'>Make profit by freelancing or lanuch new business. Everything is possible if you have digital marketing skill.</p>
          <NavLink to="#" className='bg-indigo-500 text-white px-4 py-3 uppercase'>Start Learning</NavLink>
        </div>
        <div className=''>
          <img src="https://i.pinimg.com/originals/51/18/48/5118486f1f95e9b3c9520352709a63f1.png" alt="" className='p-6'/>
        </div>
      </div>
    </div>
  )
}

export default Banner