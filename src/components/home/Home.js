import React from 'react'
import Banner from './Banner'
import Contact from './contact/Contact'
import Feedbacks from './feedback/Feedbacks'
import Services from '../service/Services'

const Home = () => {
  return (
      <div>
          <Banner />
          <Services />
          <Feedbacks/>
          <Contact/>
    </div>
  )
}

export default Home