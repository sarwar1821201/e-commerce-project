import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../assets/banner/bg.png"

const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${heroImg})` }}   className= "mx-auto max-w-[1440px] px-6 lg:px-12 bg-cover bg-center bg-no-repeat h-[811px] w-full" >
      

      <div className='flex flex-col h-full justify-center max-w-[777px] pt-8'>
        <h3 className='text-[24px] md:text-[28px] font-bold text-red-500 font-thin'>
          Fresh Fits for Frosty Days
        </h3>
        <h2 className='text-[25px] md:text-[35px] font-bold uppercase mb-0 tracking-[0.22rem]'>Get More for Less - 40% off !</h2>
        <h1 className='text-[45px] md:text-[71px] font-bold max-w-[699px] font-[800] leading-none '>on Coats & Jackets </h1>
        <div className='flex items-center'>
          <h3 className='text-[24px] md:text-[28px] font-bold'>Starting at</h3>
          <span className='bg-white px-1 inline-block rotate-[-2deg] ml-2.5 bold-40'> 
            <span className='text-2xl relative bottom-3'>৳</span>199.
            <span className='text-2xl'>99</span>
          </span>
          </div>
       <Link to={'/collection'}  className='inline-flex bg-neutral-500 bg-white flex items-center justify-center p-5 w-52 mt-8 text-[20px] font-[700]'>
       Shop Now</Link>

      </div>
    </section>
  )
}

export default Hero