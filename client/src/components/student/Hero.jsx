import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from '../../components/student/SearchBar'

const Hero = () => {
  return (
    <div className='flex  flex-col items-center justofy-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
        Empower your learning journey with our platform, <span className='text-blue-600'>where knowledge meets innovation and every student can thrive.</span><img src={assets.sketch} alt='hero image' className='md:block hidden absolute -bottom-7 right-0'/>
      </h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
        We bring world-class educational resources and personalized support to help you achieve your academic goals. Join us today and unlock your full potential!
      </p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        We bring world-class educational resources and personalized support to help you achieve your academic goals. Join us today and unlock your full potential!
      </p>
      <SearchBar />
    </div>
  )
}

export default Hero
