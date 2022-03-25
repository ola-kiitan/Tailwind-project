import React from 'react'
import ImageOne from '../images/columbian-roast.jpeg'
import ImageTwo from '../images/french-roast.jpeg'
import ImageThree from '../images/house-blend.jpeg'

export default function Service() {
  return (
    <div
      id='service'
      className='h-full py-6 flex flex-col md:flex-row lg:flex-row items-center justify-evenly bg-gray-300'
    >
      <div className='menu-card '>
        <img src={ImageOne} alt='columbia-roast' className='img' />
        <div className='py-4 text-center'>
          <h5>columbia roast</h5>
          <p>Brazil, Congo, Portugal</p>
          <span>$3</span>
        </div>
      </div>
      <div className='menu-card '>
        <img src={ImageTwo} alt='french-roast' className='img' />
        <div className='py-4 text-center'>
          <h5>French roast</h5>
          <p>Brazil, Congo, Portugal</p>
          <span>$3</span>
        </div>
      </div>
      <div className='menu-card '>
        <img src={ImageThree} alt='columbia-roast' className='img' />
        <div className='py-4 text-center'>
          <h5>House-blend</h5>
          <p>Brazil, Congo, Portugal</p>
          <span>$3</span>
        </div>
      </div>
    </div>
  )
}
