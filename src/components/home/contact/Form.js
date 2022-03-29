import React from 'react'

const Form = () => {
  return (
      <div className='w-full'>
          <form action="">
              <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder='Your name' className='focus:outline-none border-2 px-3 py-1 w-full mb-1'/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Your Email' className='focus:outline-none border-2 px-3 py-1 w-full mb-1' />
              <label htmlFor="email">Message</label>
              <textarea name="message" id="message" placeholder='Your Messgae' className='focus:outline-none border-2 px-3 py-1 w-full mb-1' />
              <input type="button" value="Send Message" className='w-full px-3 py-1 uppercase hover:bg-indigo-500 hover:text-white'/>
      </form>
      </div>
  )
}

export default Form