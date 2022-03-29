import React from 'react'
import Data from '../../../db/feedbackdb.json'
import Feedback from './Feedback'
const Feedbacks = () => {
  const feedback = Data?.map((item, idx) => <Feedback
    key={idx} item={item} />)
  return (
    <div>
      <div className="w-5/6 mx-auto">
        <div className='text-center mt-28'>
          <h1 className='text-2xl uppercase font-bold'>
            What our clients are saying
          </h1>
          <p className='mx-auto md:w-3/6'>There is no secret sauce in success without hardwork. Let's see our client's feedback.</p>
          <hr className='mx-auto w-3/12 md:w-1/12 border-2 border-indigo-500 mt-2' />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {feedback}
        </div>
      </div>
    </div>
  )
}

export default Feedbacks