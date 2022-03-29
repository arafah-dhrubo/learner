import React from 'react'
import Form from './Form'
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go'
const Contact = () => {
  return (
    <div className='mt-28 w-5/6 mx-auto'>
      <h1 className='text-center font-bold uppercase text-2xl'>Get In Touch</h1>
      <div className='flex gap-3 mt-16 jsutify-between md:flex-row flex-col'>
      <div className=''>
          <div className='mb-3'>
            <h1 className='uppercase font-semibold'>Contact Information</h1>
            <p className='md:w-4/6 w-5/6'>We are very active. You can get any help 24/7. Please stay whith us.</p>
          </div>
          <hr className='w-6/12 md:w-3/12 border-2 border-indigo-500 mt-2 mb-3' />
          <div className='flex items-center gap-1'><BiPhoneCall /> +880 1987654321</div>
          <div className='flex items-center gap-1'><AiOutlineMail/> suppoer@learner.com</div>
          <div className='flex items-center gap-1'><GoLocation /> Dhanmondi, Dhaka-1205</div>
      </div>
      <div className='md:w-3/6 mr-auto w-full'>
        <Form/>
      </div>
      </div>
    </div>
  )
}

export default Contact