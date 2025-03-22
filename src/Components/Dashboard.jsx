import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className='pt-[520px] md:pt-[230px] md:pl-[20px] md:mx-10'>
        <Card />
      </div>

    </div>

  )
}

export default Dashboard