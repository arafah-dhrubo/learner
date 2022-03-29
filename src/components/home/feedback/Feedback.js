import React from 'react'

const Feedback = props => {
  const {name, avater, rating, feedback}=props.item
  return (
    <div className='mx-auto flex border p-5 gap-3'>
      <div>
        <img src={avater} alt="" />
        <h1 className='font-semibold text-center'>{name}</h1>
      </div>
      <div>
        {feedback}
        <hr className='my-2'/>
        <p>Ratings: {rating}/5</p>
      </div>
    </div>
  )
}

export default Feedback