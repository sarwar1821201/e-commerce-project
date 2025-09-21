import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Categories from '../components/Categories'
import PopularProducts from '../components/PopularProducts'
import Blog from '../components/Blog'
import banner from '../assets/banner/banner.png'

const Home = () => {
  return (
    <>
     <Hero></Hero>
    <Features></Features>
    <Categories></Categories>
    <PopularProducts></PopularProducts>
    <div className='mx-auto max-w-[1440px] px-6 lg:px-12 lg:py-8 overflow-hidden'>
      <img src={banner} alt="bannerImg" className='rounded min-w-[711px] w-full max-w-none object-cover'  />
    </div>
    <Blog></Blog>
    </>
  )
}

export default Home